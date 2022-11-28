from aws_cdk import (
  Stack, RemovalPolicy,
  aws_s3, aws_s3_deployment,
  aws_cloudfront, aws_cloudfront_origins, CfnOutput
)
from constructs import Construct

import subprocess
from pathlib import Path
import os


class SelfieFrontStack(Stack):

  def build_angular_project(self):
    root_directory = Path(__file__).parent.parent.parent
    print(f"Root directory: {root_directory}")

    subprocess.run("ng build --configuration production", cwd=root_directory, shell=True, check=True)

    return os.path.join(root_directory, "dist/selfie-front")

  def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
    super().__init__(scope, construct_id, **kwargs)

    # The code that defines your stack goes here

    # example resource
    # queue = sqs.Queue(
    #     self, "IacQueue",
    #     visibility_timeout=Duration.seconds(300),
    # )

    self.s3_bucket = aws_s3.Bucket(self, "FrontendBucket",
                                   versioned=True,
                                   block_public_access=aws_s3.BlockPublicAccess.BLOCK_ALL,
                                   access_control=aws_s3.BucketAccessControl.PRIVATE,
                                   removal_policy=RemovalPolicy.DESTROY,
                                   auto_delete_objects=True,
                                   website_index_document="index.html",
                                   )

    oai = aws_cloudfront.OriginAccessIdentity(self, "Selfie_Frontend_OAI")

    self.s3_bucket.grant_read(oai)

    self.cloudfront_distribution = aws_cloudfront.Distribution(self, "Selfie_Front",
                                                               default_behavior=aws_cloudfront.BehaviorOptions(
                                                                 origin=aws_cloudfront_origins.S3Origin(
                                                                   self.s3_bucket,
                                                                   origin_access_identity=oai,
                                                                 ),
                                                                 # origin_request_policy=aws_cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
                                                                 # viewer_protocol_policy=aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                                                                 # response_headers_policy=aws_cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                                                                 # cache_policy=aws_cloudfront.CachePolicy.CACHING_OPTIMIZED,
                                                                 # allowed_methods=aws_cloudfront.AllowedMethods.ALLOW_ALL
                                                               ),
                                                               comment="Selfie Frontend Distribution",
                                                               error_responses=[
                                                                 aws_cloudfront.ErrorResponse(
                                                                   http_status=403,
                                                                   response_http_status=200,
                                                                   response_page_path="/index.html",
                                                                 )
                                                               ],
                                                               default_root_object="index.html"
                                                               )

    build_dir = self.build_angular_project()

    aws_s3_deployment.BucketDeployment(self, "DeployWebsite",
                                       sources=[aws_s3_deployment.Source.asset(build_dir)],
                                       destination_bucket=self.s3_bucket,
                                       distribution=self.cloudfront_distribution,
                                       )

    s3_name_output = CfnOutput(self, "S3BucketName",
                               value=self.s3_bucket.bucket_name,
                               description="S3 Bucket Name")

    cloudfront_domain_output = CfnOutput(self, "CloudFrontDomain",
                                         value=self.cloudfront_distribution.distribution_domain_name,
                                         description="CloudFront Domain Name"
                                         )
