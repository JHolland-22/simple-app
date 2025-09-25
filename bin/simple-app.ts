#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleAppStack } from '../lib/simple-app-stack';

const app = new cdk.App();

new SimpleAppStack(app, 'SimpleAppStack', {
    // Deploy to your current AWS account and the EU (Ireland) region
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT, // keeps your current AWS account
        region: 'eu-west-1',                      // force Ireland
    },
});
