import { dynamodb, documentClient } from './dynamodb';

const dynamodbPromiseHandler = (resolve, reject, err, data) => {
  if (err) reject(err);
  resolve({ ...data });
};

const listTables = async () => {
  const result = await new Promise((resolve, reject) => {
    dynamodb.listTables({}, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
  });
  return result;
};

const createTable = async (params) => {
  const result = await new Promise((resolve, reject) => {
    dynamodb.createTable(params, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
  });
  return result;
};

const tableExists = async (tableName) => {
  const tables = await listTables();
  return tables.TableNames !== undefined ? tables.TableNames.includes(tableName) : false;
};

const putItem = async (TableName, Item) => {
  const params = {
    TableName,
    Item,
  };
  const result = await new Promise((resolve, reject) => {
    documentClient.put(params, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
  });
  return result;
};

const getItem = async (TableName, Key) => {
  const params = {
    TableName,
    Key,
  };
  const result = await new Promise((resolve, reject) => {
    documentClient.get(params, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
  });
  return result;
};

export {
  listTables,
  tableExists,
  createTable,
  getItem,
  putItem,
};
