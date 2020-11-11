import { dynamodb, documentClient } from './dynamodb';

const listTables = async () => dynamodb.listTables({}).promise();

const createTable = async (params) => dynamodb.createTable(params).promise();

const tableExists = async (tableName) => {
  const tables = await listTables();
  return tables.TableNames !== undefined ? tables.TableNames.includes(tableName) : false;
};

const putItem = async (TableName, Item) => documentClient.put({
  TableName,
  Item,
}).promise();

const getItem = async (TableName, Key) => documentClient.get({
  TableName,
  Key,
}).promise();

export {
  listTables,
  tableExists,
  createTable,
  getItem,
  putItem,
};
