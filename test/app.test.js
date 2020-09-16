import request from 'supertest';
import Koa from 'koa';

import router from '../src/app';

const app = new Koa();

app.use(router());

test('ping test', async () => {
  const response = await request(app.callback()).get('/webservice-template/v1/ping');
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toStrictEqual({ name: 'webservice-template', status: 'alive' });
});

test('root test', async () => {
  const response = await request(app.callback()).get('/webservice-template/v1/');
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toStrictEqual({ message: 'Im just a webservice-template'});
});
