const config = {
  appName: 'webservice-template',
  version: 1,
  aws: {
    region: 'us-west-2',
    endpoint: 'http://localhost:8000',
  },
};

config.url = `/${config.appName}/v${config.version}`;

export default config;
