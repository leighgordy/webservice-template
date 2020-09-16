import '@babel/register';

import Koa from 'koa';
import koaLogger from 'koa-logger';
import router from './app';

const app = new Koa();

app.use(router());
app.use(koaLogger());

/* eslint-disable-next-line no-console */
app.listen(3000, () => console.log('running on port 3000'));
