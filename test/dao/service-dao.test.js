import {
  tableExists,
  createTable,
  putItem,
  getItem,
} from '../../src/dao/database-dao';

import {
  getServiceConfig,
  initializeService,
} from '../../src/dao/service-dao';

import ServiceInfo from '../../src/dao/schema/ServiceInfo';

jest.mock('../../src/dao/database-dao', () => ({
  createTable: jest.fn(),
  tableExists: jest.fn(),
  putItem: jest.fn(),
  getItem: jest.fn(),
}));

describe('service-dao-test', () => {
  describe('initializeService', () => {
    beforeEach(() => {
      tableExists.mockReset();
      createTable.mockReset();
      putItem.mockReset();
    });

    test('Initialize no ServiceInfo Document Store', async () => {
      tableExists.mockResolvedValue(false);
      createTable.mockResolvedValue();
      putItem.mockResolvedValue();
      await initializeService();
      expect(tableExists.mock.calls[0][0]).toBe('ServiceInfo');
      expect(createTable.mock.calls[0][0]).toStrictEqual(ServiceInfo);
      expect(putItem.mock.calls[0][0]).toBe('ServiceInfo');
      expect(putItem.mock.calls[0][1]).toStrictEqual({
        service: 'webservice-template',
        version: 1,
      });
    });

    test('Update existing ServiceInfo Document Store', async () => {
      tableExists.mockResolvedValue(true);
      createTable.mockResolvedValue();
      putItem.mockResolvedValue();
      await initializeService();
      expect(tableExists.mock.calls[0][0]).toBe('ServiceInfo');
      expect(createTable).not.toHaveBeenCalled();
      expect(putItem.mock.calls[0][0]).toBe('ServiceInfo');
      expect(putItem.mock.calls[0][1]).toStrictEqual({
        service: 'webservice-template',
        version: 1,
      });
    });

    test('Error on table check', async (done) => {
      const mockErr = jest.fn();
      tableExists.mockRejectedValue(mockErr);
      try {
        await initializeService();
        done.fail();
      } catch (error) {
        expect(error).toBe(mockErr);
        done();
      }
    });

    test('Error on table creation', async (done) => {
      const mockErr = jest.fn();
      tableExists.mockResolvedValue(false);
      createTable.mockRejectedValue(mockErr);
      try {
        await initializeService();
        done.fail();
      } catch (error) {
        expect(tableExists).toHaveBeenCalledWith('ServiceInfo');
        expect(error).toBe(mockErr);
        done();
      }
    });

    test('Error on table update', async (done) => {
      const mockErr = jest.fn();
      tableExists.mockResolvedValue(true);
      putItem.mockRejectedValue(mockErr);
      try {
        await initializeService();
        done.fail();
      } catch (error) {
        expect(error).toBe(mockErr);
        expect(tableExists).toHaveBeenCalledWith('ServiceInfo');
        expect(createTable).not.toHaveBeenCalled();
        done();
      }
    });
  });

  describe('getServiceConfig', () => {
    beforeEach(() => {
      getItem.mockReset();
    });

    test('successful Call', async () => {
      const serviceConfig = {
        service: 'FakeService',
        version: 2,
      };
      getItem.mockResolvedValue(serviceConfig);
      const result = await getServiceConfig();
      expect(result).toStrictEqual(serviceConfig);
    });

    test('failed call', async (done) => {
      const mockErr = jest.fn();
      getItem.mockRejectedValue(mockErr);
      try {
        await initializeService();
        done.fail();
      } catch (error) {
        getItem.mockResolvedValue(mockErr);
        done();
      }
    });
  });
});
