# Next.js SSG Starter Kit

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy

This repository uses [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) for automated deployment of the Next.js application with [Static Site Generation(SSG)](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation). The deployment pipeline follows these steps:

### Workflow Overview

1. **Build Next.js App with Static Site Generation**:
   The GitHub Actions workflow starts by building the Next.js application, leveraging the power of Static Site Generation to generate static HTML files.
2. **Push to AWS S3 Bucket**:
   Upon successful build, the artifacts are pushed to an AWS S3 bucket. Amazon S3 serves as a scalable and secure storage solution for the static files.
3. **Hosting via CloudFront CDN**:
   The static content in the S3 bucket is then distributed globally using Amazon CloudFront, a Content Delivery Network (CDN). CloudFront accelerates content delivery by caching the static assets at edge locations around the world, reducing latency for end-users.

Please refer to the guide [_How do I use CloudFront to serve a static website that’s hosted on Amazon S3?_](https://repost.aws/knowledge-center/cloudfront-serve-static-website) for simple steps to setup a S3 Bucket and CloudFront web distribution.

### GitHub Actions Workflow

The deployment workflow is orchestrated through GitHub Actions, allowing for seamless integration and automation. The configuration for the deployment workflow can be found in the `.github/workflows/deploy.yml` file.

#### Workflow Steps:

- Build:
  - The workflow triggers on specific events (e.g., pushes to the main branch).
  - It sets up the Node.js environment, installs dependencies, and builds the Next.js app using the specified commands.
- AWS S3 Deployment:
  - Upon successful build, the workflow deploys the generated static files to the configured AWS S3 bucket.
- CloudFront Invalidation:
  - the workflow include steps to trigger a CloudFront cache invalidation to ensure that the latest content is served to end-users.

### Getting Started with Deployment

To deploy your Next.js app using this workflow, follow these steps:

1. AWS Configuration:
   - Set up an AWS S3 bucket to store the static files. Please refer to the guide [_How do I use CloudFront to serve a static website that’s hosted on Amazon S3?_](https://repost.aws/knowledge-center/cloudfront-serve-static-website) for simple steps to setup a S3 Bucket and CloudFront web distribution.
   - Configure an AWS IAM user with the necessary permissions for S3 deployment.
2. GitHub Secrets:
   - Add AWS access key and secret key as GitHub secrets to securely authenticate and authorize deployment.
3. Workflow Customization:
   - Adjust the workflow configuration in `.github/workflows/deploy.yml` to match your project structure and requirements.
4. Push to Main:
   - Push changes to the main branch to trigger the GitHub Actions workflow.

Now, your Next.js app will be automatically built, deployed to S3, and served globally through CloudFront CDN, ensuring a reliable and performant user experience.
