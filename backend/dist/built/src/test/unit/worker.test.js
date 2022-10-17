"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
describe('worker unit tests', () => {
    let mockProcess;
    let log;
    let webServer;
    beforeEach(() => {
        mockProcess = {
            exit: jest.spyOn(process, 'exit'),
            on: jest.spyOn(process, 'on'),
        };
        mockProcess.exit.mockImplementation();
        mockProcess.on.mockImplementation((__, handle) => {
            handle();
        });
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    describe('system monitor enabled', () => {
        let worker;
        beforeAll(() => {
            jest.resetModules();
            jest.doMock('../../main/log');
            ({ log } = require('../../main/log'));
            jest.doMock('../../main/services/web-server');
            jest.doMock('../../main/server');
            ({ webServer } = require('../../main/server'));
            worker = require('../../main/worker');
        });
        describe('handleSignal', () => {
            let shutdownMock;
            beforeAll(() => {
                shutdownMock = jest.spyOn(worker, 'shutdown').mockImplementation(() => Promise.resolve());
            });
            afterAll(() => {
                shutdownMock.mockRestore();
            });
            test('should stop and exit with code 1', async () => {
                const name = 'name';
                await worker.handleSignal(name);
                expect(shutdownMock).toHaveBeenCalledWith();
            });
        });
        describe('run', () => {
            let handleSignalSpy;
            let shutdownMock;
            beforeAll(() => {
                handleSignalSpy = jest.spyOn(worker, 'handleSignal').mockImplementation();
                shutdownMock = jest.spyOn(worker, 'shutdown').mockImplementation(() => Promise.resolve());
            });
            afterAll(() => {
                shutdownMock.mockRestore();
                handleSignalSpy.mockRestore();
            });
            test('should start app server', async () => {
                await worker.run();
                expect(handleSignalSpy).toHaveBeenCalledTimes(2);
                expect(handleSignalSpy).toHaveBeenCalledWith('SIGINT');
                expect(handleSignalSpy).toHaveBeenCalledWith('SIGTERM');
                expect(webServer.start).toHaveBeenNthCalledWith(1);
            });
            test('should start app server given log level is debug', async () => {
                (0, jest_when_1.when)(log.isLevelEnabled).calledWith('debug').mockReturnValue(true);
                await worker.run();
                expect(handleSignalSpy).toHaveBeenCalledTimes(2);
                expect(handleSignalSpy).toHaveBeenCalledWith('SIGINT');
                expect(handleSignalSpy).toHaveBeenCalledWith('SIGTERM');
                expect(webServer.start).toHaveBeenNthCalledWith(1);
            });
            test('should shutdown given shutdown message is received', async () => {
                (0, jest_when_1.when)(mockProcess.on)
                    .calledWith('message', expect.any(Function))
                    .mockImplementation((__, listener) => {
                    listener('shutdown');
                    expect(shutdownMock).toHaveBeenNthCalledWith(1, 0);
                });
                await worker.run();
                expect(mockProcess.on).toHaveBeenCalledTimes(3);
                expect(mockProcess.on).toHaveBeenCalledWith('message', expect.any(Function));
            });
        });
        describe('shutdown', () => {
            test('should shutdown and exit with code 0', async () => {
                await worker.shutdown(0);
                expect(webServer.stop).toHaveBeenNthCalledWith(1);
                expect(mockProcess.exit).toHaveBeenNthCalledWith(1, 0);
            });
            test('should shutdown and exit with code 0 given post process pendings', async () => {
                await worker.shutdown(0);
                expect(webServer.stop).toHaveBeenNthCalledWith(1);
                expect(mockProcess.exit).toHaveBeenNthCalledWith(1, 0);
            });
            test('should shutdown and exit with code 1', async () => {
                await worker.shutdown();
                expect(webServer.stop).toHaveBeenNthCalledWith(1);
                expect(mockProcess.exit).toHaveBeenNthCalledWith(1, 1);
            });
            test('should shutdown and exit with code 1 given web server stop failed', async () => {
                const error = new Error('oops');
                webServer.stop.mockRejectedValue(error);
                await worker.shutdown(0);
                expect(webServer.stop).toHaveBeenNthCalledWith(1);
                expect(mockProcess.exit).toHaveBeenNthCalledWith(1, 1);
            });
        });
    });
    describe('system monitor disabled', () => {
        let worker;
        beforeAll(() => {
            jest.resetModules();
            jest.doMock('../../main/log');
            ({ log } = require('../../main/log'));
            jest.doMock('../../main/services/web-server');
            jest.doMock('../../main/server');
            ({ webServer } = require('../../main/server'));
            worker = require('../../main/worker');
        });
        describe('run', () => {
            let handleSignalSpy;
            let processOnMock;
            let shutdownMock;
            beforeAll(() => {
                handleSignalSpy = jest.spyOn(worker, 'handleSignal').mockImplementation();
                processOnMock = jest.spyOn(process, 'on').mockImplementation();
                shutdownMock = jest.spyOn(worker, 'shutdown').mockImplementation(() => Promise.resolve());
            });
            afterAll(() => {
                shutdownMock.mockRestore();
                processOnMock.mockRestore();
                handleSignalSpy.mockRestore();
            });
            test('should ignore system monitor given it is disabled', async () => {
                await worker.run();
                expect(handleSignalSpy).toHaveBeenCalledTimes(2);
                expect(handleSignalSpy).toHaveBeenCalledWith('SIGINT');
                expect(handleSignalSpy).toHaveBeenCalledWith('SIGTERM');
                expect(webServer.start).toHaveBeenNthCalledWith(1);
            });
        });
        describe('shutdown', () => {
            test('should ignore system monitor given it is disabled', async () => {
                await worker.shutdown();
                expect(webServer.stop).toHaveBeenNthCalledWith(1);
                expect(mockProcess.exit).toHaveBeenNthCalledWith(1, 1);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3dvcmtlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWdDO0FBTWhDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsSUFBSSxXQUE2RCxDQUFBO0lBQ2pFLElBQUksR0FBNEIsQ0FBQTtJQUNoQyxJQUFJLFNBQXFDLENBQUE7SUFDekMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFdBQVcsR0FBRztZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7WUFDakMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztTQUM5QixDQUFBO1FBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3JDLFdBQVcsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDL0MsTUFBTSxFQUFFLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxFQUFFO1FBQ3RDLElBQUksTUFBa0IsQ0FBQTtRQUN0QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FDNUI7WUFB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