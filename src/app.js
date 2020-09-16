import combineRouters from 'koa-combine-routers'

import ping from './service/ping';
import root from './service/root';

const router = combineRouters(
  ping,
  root,
);

export default router;
