import {
  aws_apigateway as apiGateway,
  aws_dynamodb as dynamo,
  aws_lambda as lambda,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

interface IRocketComponent {
  stackPrefix: string;
  lambdaCode?: lambda.Code;
  createDynamoDbTable?: boolean;
}

export class RocketComponent extends Construct {

  private lambda: lambda.Function;

  constructor(parent: Construct, id: string, props: IRocketComponent = { stackPrefix: 'RocketComponent', createDynamoDbTable: true }) {
    super(parent, id);

    this.lambda = createLambda(this, props);
    createDynamoDB(this, props, this.lambda);
    createApiGateway(this, props, this.lambda);
  }
}

const createLambda = (context: Construct, { stackPrefix, lambdaCode } : IRocketComponent ) => {
  return new lambda.Function(context, `${stackPrefix}-Lambda`, {
    runtime: lambda.Runtime.NODEJS_14_X,
    code: lambdaCode || lambda.AssetCode.fromAsset('lambda'),
    handler: 'index.handler',
  });
};

const createDynamoDB = (context: Construct, { stackPrefix, createDynamoDbTable } : IRocketComponent, lambdaFunction : lambda.Function ) => {
  if (!createDynamoDbTable) return;

  const dynamoTable = new dynamo.Table(context, `${stackPrefix}-DynamoDB`, {
    partitionKey: { name: 'id', type: dynamo.AttributeType.STRING },
  });

  dynamoTable.grantReadWriteData(lambdaFunction);
  lambdaFunction.addEnvironment('TABLE_NAME', dynamoTable.tableName);
};

const createApiGateway = (context: Construct, { stackPrefix } : IRocketComponent, lambdaFunction : lambda.Function ) => {
  new apiGateway.LambdaRestApi(context, `${stackPrefix}-ApiGw`, {
    handler: lambdaFunction,
  });
};