import Router from 'koa-router';
import config from '../config';

const router = new Router();

router.get(`${config.url}/ping`, async (ctx) => {
  ctx.body = {
    name: 'webservice-template',
    status: 'alive',
  };
});

export default router;
