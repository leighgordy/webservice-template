import Router from 'koa-router';
import config from '../config';
import { getServiceConfig } from '../dao/service-dao';

const router = new Router();

router.get(`${config.url}/ping`, async (ctx) => {
  ctx.body = await getServiceConfig();
});

export default router;
