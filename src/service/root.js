import Router from 'koa-router';
import config from '../config';

const router = new Router();

router.get(`${config.url}/`, async (ctx) => {
  ctx.body = {
    message: 'Im just a webservice-template',
  };
});

export default router;
