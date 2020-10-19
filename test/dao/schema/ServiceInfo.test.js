import ServiceInfo from '../../../src/dao/schema/ServiceInfo';

/*
  NOTE: This payload should should never change as its a table that is shared by many webservices.
  If you must change it then do so in the webservice-template project and pull into this and
  every other forked webservice instance.

  TODO: ServiceInfo, related api classes and tests should be moved into a separate package
  and imported by every web service. Doing this for now as I am focussing on learning how to
  build a web service. Will update in the near future. LG
*/
describe('Test Schema', () => {
  test('Payload should always equal this see comment at the top of this test', () => expect(ServiceInfo).toStrictEqual({
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
  }));
});
