#!/usr/bin/env python3
import os

import aws_cdk as cdk

from iac.selfie_front_stack import SelfieFrontStack


app = cdk.App()
SelfieFrontStack(app, "SelfieFrontStack",
                  env=cdk.Environment(
                      account="264055331071",
                      region="us-east-2",
                  )
    )

app.synth()
