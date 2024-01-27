# Serverless-Contact-Form
a serverless contact form using AWS Lambda, API Gateway, and DynamoDB.

# Serverless Contact Form

## Overview

This project is about creating a serverless contact form using AWS Lambda, API Gateway, and DynamoDB. When a user submits the form, the data is stored in DynamoDB. This project serves as an introduction to serverless architecture and basic API creation.

## Project Structure

- **`lambda_function.py`:** AWS Lambda function code handling the form submission.
- **`template.yaml`:** AWS Serverless Application Model (SAM) template defining resources including Lambda, API Gateway, and DynamoDB.
- **`web/`:** Simple HTML and JavaScript files for the contact form.

## Prerequisites

1. **AWS Account:** Ensure you have an AWS account. If not, create one [here](https://aws.amazon.com/).

2. **AWS CLI and SAM CLI:** Install the AWS Command Line Interface (CLI) and AWS Serverless Application Model (SAM) CLI. Instructions can be found [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/serverless-contact-form.git
   cd serverless-contact-form
   ```

2. **Deploy the Application:**
   - Deploy the serverless application using SAM CLI.
     ```bash
     sam deploy --guided
     ```
   - Follow the prompts to configure the deployment, including AWS region, stack name, and other parameters.

3. **Access the Contact Form:**
   - Once the deployment is complete, the SAM CLI will provide the API Gateway endpoint URL.
   - Open the provided URL in a web browser to access the serverless contact form.

4. **Submit a Form:**
   - Fill out the contact form and submit it.
   - The submitted data will be stored in DynamoDB.

## Customization

Feel free to customize the project by modifying the Lambda function code, HTML, or JavaScript files in the `web/` directory to match your specific requirements for the contact form.

## Learnings

- Create a serverless application using AWS Lambda, API Gateway, and DynamoDB.
- Understand the basics of AWS Serverless Application Model (SAM).
- Gain hands-on experience with serverless architecture.
- Learn how to create a simple API using API Gateway.
