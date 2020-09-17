import request from 'supertest';
import Koa from 'koa';

import ping from '../../src/service/ping';

const app = new Koa();

app.use(ping.routes());

test('ping test', async () => {
  const response = await request(app.callback()).get('/webservice-template/v1/ping');
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toStrictEqual({ name: 'webservice-template', status: 'alive' });
});
