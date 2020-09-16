import Router from 'koa-router';
const router = new Router()

router.get('/webservice-template/v1/', async (ctx, next) => {
  ctx.body = {
    message: 'Im just a webservice-template',
  };
});

export default router;
