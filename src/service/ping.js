import Router from 'koa-router';
const router = new Router()

router.get('/ping', async (ctx, next) => {
  ctx.body = {
    name: 'webservice-template',
    status: 'alive',
  };
});

export default router;
