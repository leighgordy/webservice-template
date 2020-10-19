export default {
  TableName: 'ServiceInfo',
  KeySchema: [
    { AttributeName: 'version', KeyType: 'HASH' },
    { AttributeName: 'service', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'version', AttributeType: 'N' },
    { AttributeName: 'service', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};
