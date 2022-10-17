"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
const service_base_1 = require("../../../main/services/service-base");
describe('service base unit tests', () => {
    let log;
    beforeAll(() => {
        jest.doMock('../../../main/log');
        ({ log } = require('../../../main/log'));
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    describe('ServiceBase', () => {
        class MyServiceBase extends service_base_1.ServiceBase {
            constructor() {
                super('my-service-base', log, MyServiceBase.defaultConfig);
            }
            async end() {
                return Promise.resolve(false);
            }
            async run() {
                return Promise.resolve(false);
            }
        }
        MyServiceBase.defaultConfig = {
            foo: 'bar',
        };
        let endSpy;
        let runSpy;
        beforeAll(() => {
            endSpy = jest.spyOn(MyServiceBase.prototype, 'end').mockImplementation();
            runSpy = jest.spyOn(MyServiceBase.prototype, 'run').mockImplementation();
        });
        afterAll(() => {
            endSpy.mockRestore();
            runSpy.mockRestore();
        });
        describe('instance', () => {
            let myServiceBase;
            beforeEach(() => {
                myServiceBase = new MyServiceBase();
            });
            test('should provide state properties', () => {
                expect(myServiceBase.state).toEqual({ started: false, stopping: false });
            });
            describe('init', () => {
                test('should initialize given options', () => {
                    const opt = {
                        foo: 'hello',
                    };
                    myServiceBase.init(opt);
                    expect(myServiceBase.config).toEqual({
                        foo: 'hello',
                    });
                });
            });
            describe('start', () => {
                let initSpy;
                beforeAll(() => {
                    initSpy = jest.spyOn(MyServiceBase.prototype, 'init').mockImplementation();
                });
                afterAll(() => {
                    initSpy.mockRestore();
                });
                test('should start', async () => {
                    (0, jest_when_1.when)(runSpy).calledWith().mockResolvedValue(true);
                    const result = await myServiceBase.start();
                    expect(result).toEqual(true);
                    expect(myServiceBase.state.started).toEqual(true);
                    expect(runSpy).toHaveBeenCalledWith();
                });
                test('should fail to start', async () => {
                    (0, jest_when_1.when)(runSpy).calledWith().mockResolvedValue(false);
                    const result = await myServiceBase.start();
                    expect(result).toEqual(false);
                    expect(myServiceBase.state).toEqual({ started: false, stopping: false });
                    expect(runSpy).toHaveBeenCalledWith();
                });
                test('should not start given already started', async () => {
                    (0, jest_when_1.when)(runSpy).calledWith().mockResolvedValue(true);
                    await myServiceBase.start();
                    jest.resetAllMocks();
                    const result = await myServiceBase.start();
                    expect(result).toEqual(false);
                    expect(myServiceBase.state).toEqual({ started: true, stopping: false });
                    expect(initSpy).not.toHaveBeenCalled();
                    expect(runSpy).not.toHaveBeenCalled();
                });
            });
            describe('stop', () => {
                test('should stop', async () => {
                    (0, jest_when_1.when)(runSpy).calledWith().mockResolvedValue(true);
                    await myServiceBase.start();
                    (0, jest_when_1.when)(endSpy).calledWith().mockResolvedValue(true);
                    const promise = myServiceBase.stop();
                    expect(myServiceBase.state).toEqual({ started: true, stopping: true });
                    const result = await promise;
                    expect(result).toEqual(true);
                    expect(myServiceBase.state).toEqual({ started: false, stopping: false });
                    expect(endSpy).toHaveBeenCalled();
                });
                test('should fail to stop', async () => {
                    (0, jest_when_1.when)(runSpy).calledWith().mockResolvedValue(true);
                    await myServiceBase.start();
                    (0, jest_when_1.when)(endSpy).calledWith().mockResolvedValue(false);
                    const promise = myServiceBase.stop();
                    expect(myServiceBase.state).toEqual({ started: true, stopping: true });
                    const result = await promise;
                    expect(result).toEqual(false);
                    expect(myServiceBase.state).toEqual({ started: true, stopping: false });
                    expect(endSpy).toHaveBeenCalled();
                });
                test('should not stop given already stopped', async () => {
                    const result = await myServiceBase.stop();
                    expect(result).toEqual(false);
                    expect(myServiceBase.state).toEqual({ started: false, stopping: false });
                    expect(endSpy).not.toHaveBeenCalled();
                });
                test('should not stop given already stopping', async () => {
                    (0, jest_when_1.when)(runSpy).calledWith().mockResolvedValue(true);
                    await myServiceBase.start();
                    (0, jest_when_1.when)(endSpy).calledWith().mockResolvedValue(true);
                    const promise = myServiceBase.stop();
                    expect(myServiceBase.state).toEqual({ started: true, stopping: true });
                    jest.resetAllMocks();
                    const result = await myServiceBase.stop();
                    expect(result).toEqual(false);
                    expect(myServiceBase.state).toEqual({ started: false, stopping: false });
                    expect(endSpy).not.toHaveBeenCalled();
                    await promise;
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1iYXNlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3NlcnZpY2VzL3NlcnZpY2UtYmFzZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWdDO0FBRWhDLHNFQUFpRTtBQUlqRSxRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLElBQUksR0FBd0IsQ0FBQTtJQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUMvQjtRQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1FBSTNCLE1BQU0sYUFBYyxTQUFRLDBCQUFnQztZQUkxRDtnQkFDRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUM1RCxDQUFDO1lBRU0sS0FBSyxDQUFDLEdBQUc7Z0JBQ2QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9CLENBQUM7WUFFTSxLQUFLLENBQUMsR0FBRztnQkFDZCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0IsQ0FBQzs7UUFiYSwyQkFBYSxHQUF3QjtZQUNqRCxHQUFHLEVBQUUsS0FBSztTQUNYLENBQUE7UUFhSCxJQUFJLE1BQTBDLENBQUE7UUFDOUMsSUFBSSxNQUEwQyxDQUFBO1FBQzlDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixNQUFNLEdB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