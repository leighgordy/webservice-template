import request from 'supertest';
import Koa from 'koa';

import router from '../src/app';

const app = new Koa();

app.use(router());

const hitEndpoint = async (url, status) => {
  const response = await request(app.callback()).get(url);
  expect(response.status).toBe(status);
};

describe('Test each route functions when bundled together', () => {
  test('ping test', async () => hitEndpoint('/webservice-template/v1/ping', 200));
  test('root test', async () => hitEndpoint('/webservice-template/v1/', 200));
});
