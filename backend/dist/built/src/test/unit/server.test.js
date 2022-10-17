"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
describe('server unit tests', () => {
    let log;
    let registerApp;
    let WebServer;
    beforeAll(() => {
        jest.doMock('../../main/log');
        ({ log } = require('../../main/log'));
        jest.doMock('../../main/router');
        ({ registerApp } = require('../../main/router'));
        jest.doMock('../../main/services/web-server');
        ({ WebServer } = require('../../main/services/web-server'));
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    test('should create and initialize server', () => {
        const webServer = {
            init: jest.fn(),
        };
        (0, jest_when_1.when)(WebServer).calledWith(log, registerApp).mockReturnValue(webServer);
        const result = require('../../main/server');
        expect(WebServer).toHaveBeenNthCalledWith(1, log, registerApp);
        expect(result).toHaveProperty('webServer', webServer);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3NlcnZlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWdDO0FBS2hDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsSUFBSSxHQUE0QixDQUFBO0lBQ2hDLElBQUksV0FBc0IsQ0FBQTtJQUMxQixJQUFJLFNBQW1DLENBQUE7SUFDdkMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FDNUI7UUFBQSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQy9CO1FBQUEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUM1QztRQUFBLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7UUFFL0MsTUFBTSxTQUFTLEdBQUc7WUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7U0FDeUIsQ0FBQTtRQUMxQyxJQUFBLGdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdkUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFFM0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDdkQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9