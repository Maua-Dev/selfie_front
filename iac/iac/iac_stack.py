from aws_cdk import (
  Stack,RemovalPolicy,
  aws_s3, aws_s3_deployment,
  aws_cloudfront, aws_cloudfront_origins
)
from constructs import Construct

class SelfieFrontStack(Stack):

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
                                       removal_policy=RemovalPolicy.DESTROY,
                                       website_index_document="index.html",
                                       )

        oai = aws_cloudfront.OriginAccessIdentity(self, "Selfie_OAI")

        self.s3_bucket.grant_read(oai)

        self.cloudfront_distribution = aws_cloudfront.Distribution(self, "Selfie_CloudFront_Distribution",
                                                                   default_behavior=aws_cloudfront.BehaviorOptions(
                                                                     origin=aws_cloudfront_origins.S3Origin(
                                                                       self.s3_bucket,
                                                                       origin_access_identity=oai),
                                                                     origin_request_policy=aws_cloudfront.OriginRequestPolicy.CORS_S3_ORIGIN,
                                                                     viewer_protocol_policy=aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                                                                     response_headers_policy=aws_cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                                                                     cache_policy=aws_cloudfront.CachePolicy.CACHING_OPTIMIZED,
                                                                     allowed_methods=aws_cloudfront.AllowedMethods.ALLOW_ALL
                                                                   )
                                                                   )

        aws_s3_deployment.BucketDeployment(self, "DeployWebsite",
                                            sources=[aws_s3_deployment.Source.asset("./frontend")],
                                            destination_bucket=self.s3_bucket,
                                           )

