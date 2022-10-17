"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
const config_1 = require("../../main/config");
describe('log unit tests', () => {
    let Logger;
    beforeAll(() => {
        jest.doMock('../../main/utils/logger');
        ({ Logger } = require('../../main/utils/logger'));
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    test('should create and initialize log', () => {
        const log = {
            init: jest.fn(),
        };
        (0, jest_when_1.when)(Logger).calledWith('Express-template').mockReturnValue(log);
        const result = require('../../main/log');
        expect(Logger).toHaveBeenNthCalledWith(1, config_1.log.name);
        expect(log.init).toHaveBeenCalledTimes(1);
        expect(result).toHaveProperty('log', log);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L2xvZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWdDO0FBRWhDLDhDQUFvRDtBQUdwRCxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQzlCLElBQUksTUFBaUIsQ0FBQTtJQUNyQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUNyQztRQUFBLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7UUFFNUMsTUFBTSxHQUFHLEdBQUc7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtTQUNzQixDQUFBO1FBQ3ZDLElBQUEsZ0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFaEUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFFeEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxZQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6QyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMzQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=