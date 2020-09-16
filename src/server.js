import '@babel/register';
import router from './app';

import Koa from 'koa';
import koaLogger from 'koa-logger';

const app = new Koa();

app.use(router());
app.use(koaLogger());
app.listen(3000, () => console.log('running on port 3000'));
