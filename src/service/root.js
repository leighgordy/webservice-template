import Router from 'koa-router';
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = {
    message: 'Im just a webservice-template',
  };
});

export default router;
