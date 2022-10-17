"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
describe('index unit tests', () => {
    let processExitSpy;
    let log;
    beforeEach(() => {
        jest.doMock('../../main/log');
        ({ log } = require('../../main/log'));
        jest.doMock('../../main/services/web-server');
        processExitSpy = jest.spyOn(process, 'exit').mockImplementation();
    });
    afterEach(() => {
        processExitSpy.mockRestore();
        jest.resetModules();
    });
    test('should import and execute worker', () => {
        jest.doMock('../../main/worker');
        const runWorker = require('../../main/worker').run;
        (0, jest_when_1.when)(runWorker).calledWith().mockResolvedValue();
        require('../../main/index');
        expect(runWorker).toHaveBeenCalledWith();
    });
    test('should log error and exit process when worker start crashes', (done) => {
        const err = new Error('oops');
        jest.doMock('../../main/worker');
        const runWorker = require('../../main/worker').run;
        (0, jest_when_1.when)(runWorker).calledWith().mockRejectedValue(err);
        require('../../main/index');
        expect(runWorker).toHaveBeenCalledWith();
        setImmediate(() => {
            expect(log.error).toHaveBeenCalledWith(err);
            expect(processExitSpy).toHaveBeenCalledWith(1);
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvaW5kZXgudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFnQztBQUtoQyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLElBQUksY0FBZ0MsQ0FBQTtJQUNwQyxJQUFJLEdBQXdCLENBQUE7SUFDNUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FDNUI7UUFBQSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUE7UUFDN0MsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUE7SUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7UUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sU0FBUyxHQUEyQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDMUYsSUFBQSxnQkFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFFaEQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFFM0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUE7SUFDMUMsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsNkRBQTZELEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUUzRSxNQUFNLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDaEMsTUFBTSxTQUFTLEdBQTJDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUMxRixJQUFBLGdCQUFJLEVBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFbkQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFFM0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDeEMsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUM5QyxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9