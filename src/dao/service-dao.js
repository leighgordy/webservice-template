import ServiceInfoSchema from './schema/ServiceInfo';
import config from '../config';
import {
  tableExists,
  createTable,
  putItem,
  getItem,
} from './database-dao';

const initializeService = async () => {
  const exists = await tableExists('ServiceInfo');
  if (!exists) await createTable(ServiceInfoSchema);
  await putItem('ServiceInfo', {
    service: config.appName,
    version: config.version,
  });
};

const getServiceConfig = async () => {
  const item = await getItem('ServiceInfo', {
    service: config.appName,
    version: config.version,
  });
  return item;
};

export {
  initializeService,
  getServiceConfig,
};
