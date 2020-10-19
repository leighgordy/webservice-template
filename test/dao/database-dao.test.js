import {
  createTable,
  listTables,
  tableExists,
  putItem,
  getItem,
} from '../../src/dao/database-dao';
import { dynamodb, documentClient } from '../../src/dao/dynamodb';

let mockError = null;
let mockData = null;

jest.mock('../../src/dao/dynamodb', () => ({
  dynamodb: {
    listTables: jest.fn((params, callback) => callback(mockError, mockData)),
    createTable: jest.fn((params, callback) => callback(mockError, mockData)),
  },
  documentClient: {
    put: jest.fn((params, callback) => callback(mockError, mockData)),
    get: jest.fn((params, callback) => callback(mockError, mockData)),
  },
}));
describe('databse-dao-test', () => {
  beforeEach(() => {
    mockError = null;
    mockData = null;
  });
  describe('listTables', () => {
    test('successful Call', async () => {
      mockData = {
        moo: 'moo',
      };
      const results = await listTables();
      expect(dynamodb.listTables.mock.calls[0][0]).toStrictEqual({});
      expect(dynamodb.listTables.mock.calls[0][1]).toBeInstanceOf(Function);
      expect(results).toStrictEqual(mockData);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        await listTables();
        done.fail();
      } catch (error) {
        expect(error).not.toBe(null);
        done();
      }
    });
  });
  describe('createTable', () => {
    test('successful Call', async () => {
      mockData = {
        moo: 'moo',
      };
      const params = {
        TableName: 'ServiceInfo',
      };
      const results = await createTable(params);
      expect(dynamodb.createTable.mock.calls[0][0]).toStrictEqual(params);
      expect(dynamodb.createTable.mock.calls[0][1]).toBeInstanceOf(Function);
      expect(results).toStrictEqual(mockData);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        const params = {
          TableName: 'ServiceInfo',
        };
        await createTable(params);
        done.fail();
      } catch (error) {
        expect(error).not.toBe(null);
        done();
      }
    });
  });
  describe('tableExists', () => {
    test('successful Call with match', async () => {
      mockData = {
        TableNames: ['FakeTable'],
      };
      const result = await tableExists('FakeTable');
      expect(dynamodb.listTables.mock.calls[0][0]).toStrictEqual({});
      expect(dynamodb.listTables.mock.calls[0][1]).toBeInstanceOf(Function);
      expect(result).toBe(true);
    });
    test('successful Call no match', async () => {
      mockData = {
        TableNames: [],
      };
      const result = await tableExists('FakeTable');
      expect(dynamodb.listTables.mock.calls[0][0]).toStrictEqual({});
      expect(dynamodb.listTables.mock.calls[0][1]).toBeInstanceOf(Function);
      expect(result).toBe(false);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        await tableExists('FakeTable');
        done.fail();
      } catch (error) {
        expect(error).not.toBe(null);
        done();
      }
    });
  });
  describe('putItem', () => {
    test('successful Call', async () => {
      const params = {
        param1: 'param1',
        param2: 'param2',
      };
      await putItem('tableName', params);
      expect(documentClient.put.mock.calls[0][0]).toStrictEqual({
        Item: params,
        TableName: 'tableName',
      });
      expect(documentClient.put.mock.calls[0][1]).toBeInstanceOf(Function);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        const params = {
          param1: 'param1',
          param2: 'param2',
        };
        await putItem('tableName', params);
        done.fail();
      } catch (error) {
        expect(error).not.toBe(null);
        done();
      }
    });
  });
  describe('getItem', () => {
    test('successful Call', async () => {
      await getItem('tableName', 'Key');
      expect(documentClient.get.mock.calls[0][0]).toStrictEqual({
        Key: 'Key',
        TableName: 'tableName',
      });
      expect(documentClient.get.mock.calls[0][1]).toBeInstanceOf(Function);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        await getItem('tableName', 'Key');
        done.fail();
      } catch (error) {
        expect(error).not.toBe(null);
        done();
      }
    });
  });
});
