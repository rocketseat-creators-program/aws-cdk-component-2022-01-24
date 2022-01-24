import { aws_lambda as lambda, App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RocketComponent } from '../src';

test('Create full component', () => {
  // Given
  const app = new App();
  const stack = new Stack(app, 'stack-test');

  // When
  new RocketComponent(stack, 'RocketeatComponent', {
    stackPrefix: 'ExpertsClub',
    lambdaCode: lambda.AssetCode.fromAsset('lambda'),
    createDynamoDbTable: true,
  });

  // Then
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 1);
  template.resourceCountIs('AWS::DynamoDB::Table', 1);
  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
});

test('Create component without dynamo', () => {
  // Given
  const app = new App();
  const stack = new Stack(app, 'stack-test');

  // When
  new RocketComponent(stack, 'RocketeatComponent', {
    stackPrefix: 'ExpertsClub',
    lambdaCode: lambda.AssetCode.fromAsset('lambda'),
    createDynamoDbTable: false,
  });

  // Then
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 1);
  template.resourceCountIs('AWS::DynamoDB::Table', 0);
  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
});

test('Create component default', () => {
  // Given
  const app = new App();
  const stack = new Stack(app, 'stack-test');

  // When
  new RocketComponent(stack, 'RocketeatComponent');

  // Then
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 1);
  template.resourceCountIs('AWS::DynamoDB::Table', 1);
  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
});