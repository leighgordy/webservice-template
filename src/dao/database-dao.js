import { dynamodb, documentClient } from './dynamodb';

const dynamodbPromiseHandler = (resolve, reject, err, data) => {
  if (err) reject(err);
  resolve({ ...data });
};

const listTables = async () => new Promise((resolve, reject) => {
  dynamodb.listTables({}, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
});

const createTable = async (params) => new Promise((resolve, reject) => {
  dynamodb.createTable(params, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
});

const tableExists = async (tableName) => {
  const tables = await listTables();
  return tables.TableNames !== undefined ? tables.TableNames.includes(tableName) : false;
};

const putItem = async (TableName, Item) => {
  const params = {
    TableName,
    Item,
  };
  return new Promise((resolve, reject) => {
    documentClient.put(params, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
  });
};

const getItem = async (TableName, Key) => {
  const params = {
    TableName,
    Key,
  };
  return new Promise((resolve, reject) => {
    documentClient.get(params, (err, data) => dynamodbPromiseHandler(resolve, reject, err, data));
  });
};

export {
  listTables,
  tableExists,
  createTable,
  getItem,
  putItem,
};
