import json
import boto3
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("lotionplus20230411")

def get_notes_handler(event, context):
    email = event["rawQueryString"].split('=')[1]
    try:
        res = table.query(KeyConditionExpression=Key('email').eq(email))
        return{
            "statusCode": 200,
            "body": json.dumps(res["Items"])
        }
    except Exception as exp:
        print(exp)
        return{
            "statusCode": 500,
            "body": json.dumps(res["Items"])
        }