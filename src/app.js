import combineRouters from 'koa-combine-routers'
import Koa from 'koa';
import koaLogger from 'koa-logger';

import ping from './service/ping';
import root from './service/root';

const app = new Koa();

const router = combineRouters(
  ping,
  root,
);
app.use(router());
app.use(koaLogger());
app.listen(3000, () => console.log('running on port 3000'))