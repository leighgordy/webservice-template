import config from '../src/config';

describe('Test Initialisation', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(config).toStrictEqual({
      appName: 'webservice-template',
      version: 'v1',
      url: '/webservice-template/v1',
    });
  });
});
