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
const mockPromise = jest.fn();

jest.mock('../../src/dao/dynamodb', () => ({
  dynamodb: {
    listTables: jest.fn(() => ({
      promise: mockPromise,
    })),
    createTable: jest.fn(() => ({
      promise: mockPromise,
    })),
  },
  documentClient: {
    put: jest.fn(() => ({
      promise: mockPromise,
    })),
    get: jest.fn(() => ({
      promise: mockPromise,
    })),
  },
}));
describe('databse-dao-test', () => {
  beforeEach(() => {
    mockError = null;
    mockData = null;
    jest.clearAllMocks();
  });
  describe('listTables', () => {
    test('successful Call', async () => {
      mockData = {
        moo: 'moo',
      };
      mockPromise.mockResolvedValue(mockData);
      const results = await listTables();
      expect(dynamodb.listTables.mock.calls[0][0]).toStrictEqual({});
      expect(results).toStrictEqual(mockData);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        mockPromise.mockRejectedValue(mockError);
        await listTables();
        done.fail();
      } catch (error) {
        expect(error).toBe(mockError);
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
      mockPromise.mockResolvedValue(mockData);
      const results = await createTable(params);
      expect(dynamodb.createTable.mock.calls[0][0]).toStrictEqual(params);
      expect(results).toStrictEqual(mockData);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        const params = {
          TableName: 'ServiceInfo',
        };
        mockPromise.mockRejectedValue(mockError);
        await createTable(params);
        done.fail();
      } catch (error) {
        expect(error).toBe(mockError);
        done();
      }
    });
  });
  describe('tableExists', () => {
    test('successful Call with match', async () => {
      mockData = {
        TableNames: ['FakeTable'],
      };
      mockPromise.mockResolvedValue(mockData);
      const result = await tableExists('FakeTable');
      expect(dynamodb.listTables.mock.calls[0][0]).toStrictEqual({});;
      expect(result).toBe(true);
    });
    test('successful Call no match', async () => {
      mockData = {
        TableNames: [],
      };
      mockPromise.mockResolvedValue(mockData);
      const result = await tableExists('FakeTable');
      expect(dynamodb.listTables.mock.calls[0][0]).toStrictEqual({});
      expect(result).toBe(false);
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        mockPromise.mockRejectedValue(mockError);
        await tableExists('FakeTable');
        done.fail();
      } catch (error) {
        expect(error).toBe(mockError);
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
      mockPromise.mockResolvedValue(mockData);
      await putItem('tableName', params);
      expect(documentClient.put.mock.calls[0][0]).toStrictEqual({
        Item: params,
        TableName: 'tableName',
      });
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        const params = {
          param1: 'param1',
          param2: 'param2',
        };
        mockPromise.mockRejectedValue(mockError);
        await putItem('tableName', params);
        done.fail();
      } catch (error) {
        expect(error).toBe(mockError);
        done();
      }
    });
  });
  describe('getItem', () => {
    test('successful Call', async () => {
      mockPromise.mockResolvedValue(mockData);
      await getItem('tableName', 'Key');
      expect(documentClient.get.mock.calls[0][0]).toStrictEqual({
        Key: 'Key',
        TableName: 'tableName',
      });
    });
    test('Failed Call', async (done) => {
      mockError = {};
      try {
        mockPromise.mockRejectedValue(mockError);
        await getItem('tableName', 'Key');
        done.fail();
      } catch (error) {
        expect(error).toBe(mockError);
        done();
      }
    });
  });
});
