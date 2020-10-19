import AWS from 'aws-sdk';
import {
  dynamodb,
  documentClient,
} from '../../src/dao/dynamodb';
import config from '../../src/config';

jest.doMock('aws-sdk', () => ({
  DynamoDB: jest.fn(() => ({
    DocumentClient: jest.fn(() => ({})),
  })),
}));

describe('dynamod', () => {
  test('Test aws.config was set with our config', () => {
    const {
      aws: {
        region,
        endpoint,
      },
    } = config;
    expect(AWS.config.region).toBe(region);
    expect(AWS.config.endpoint).toBe(endpoint);
  });
  test('Test dynamodb instance was created', () => {
    expect(dynamodb).toBeInstanceOf(AWS.DynamoDB);
  });
  test('Test DocumentClient instance was created', () => {
    expect(documentClient).toBeInstanceOf(AWS.DynamoDB.DocumentClient);
  });
});
