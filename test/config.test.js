import config from '../src/config';

describe('Test Initialisation', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(config).toStrictEqual({
      appName: 'webservice-template',
      aws: {
        endpoint: 'http://localhost:8000',
        region: 'us-west-2',
      },
      version: 1,
      url: '/webservice-template/v1',
    });
  });
});
