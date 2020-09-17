import request from 'supertest';
import Koa from 'koa';

import root from '../../src/service/root';

const app = new Koa();

app.use(root.routes());

test('root test', async () => {
  const response = await request(app.callback()).get('/webservice-template/v1/');
  expect(response.status).toBe(200);
  expect(JSON.parse(response.text)).toStrictEqual({ message: 'Im just a webservice-template'});
});