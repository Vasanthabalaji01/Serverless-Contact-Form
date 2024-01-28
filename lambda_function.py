import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ContactFormTable')  # Replace 'ContactFormTable' with your DynamoDB table name

def lambda_handler(event, context):
    try:
        # Parse form data from the Lambda event
        form_data = json.loads(event['body'])

        # Save form data to DynamoDB
        response = table.put_item(Item=form_data)

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Form submission successful'})
        }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': f'Error: {str(e)}'})
        }
