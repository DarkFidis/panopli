"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const baseDir = (0, path_1.resolve)(__dirname, '..', '..', '..', '..');
describe('logger unit tests', () => {
    let TsLogger;
    let getCaller;
    let onFinished;
    beforeEach(() => {
        jest.doMock('express');
        jest.doMock('on-finished');
        onFinished = require('on-finished');
        jest.doMock('ts-log-debug');
        ({ Logger: TsLogger } = require('ts-log-debug'));
        jest.doMock('../../../main/utils/caller');
        ({ getCaller } = require('../../../main/utils/caller'));
    });
    afterEach(() => {
        jest.resetModules();
    });
    describe('Logger', () => {
        describe('defaultLoggerConfig', () => {
            let nodeEnvOrig;
            let nodeConfigEnvOrig;
            beforeAll(() => {
                nodeEnvOrig = process.env.NODE_ENV;
                nodeConfigEnvOrig = process.env.NODE_CONFIG_ENV;
            });
            beforeEach(() => {
                delete process.env.NODE_ENV;
                delete process.env.NODE_CONFIG_ENV;
            });
            afterAll(() => {
                process.env.NODE_CONFIG_ENV = nodeConfigEnvOrig;
                process.env.NODE_ENV = nodeEnvOrig;
            });
            test('should provide default logger config given no NODE_ENV neither NODE_CONFIG_ENV', () => {
                const { Logger } = require('../../../main/utils/logger');
                expect(Logger).toHaveProperty('defaultLoggerConfig');
                expect(Logger.defaultLoggerConfig).toHaveProperty('appenders');
            });
            test('should provide test logger config given NODE_ENV = "test"', () => {
                process.env.NODE_ENV = 'test';
                const { Logger } = require('../../../main/utils/logger');
                expect(Logger).toHaveProperty('defaultLoggerConfig');
                expect(Logger.defaultLoggerConfig).toEqual({
                    appenders: { 'console-log': { type: 'console' } },
                    layout: undefined,
                    level: 'warn',
                });
            });
            test('should provide test logger config given NODE_ENV = "development"', () => {
                process.env.NODE_ENV = 'development';
                const { Logger } = require('../../../main/utils/logger');
                expect(Logger).toHaveProperty('defaultLoggerConfig');
                expect(Logger.defaultLoggerConfig).toEqual({
                    appenders: { 'console-log': { type: 'console' } },
                    layout: undefined,
                    level: 'info',
                });
            });
        });
        describe('constructor', () => {
            let Logger;
            beforeEach(() => {
                Logger = require('../../../main/utils/logger').Logger;
            });
            test('should return a default instance', () => {
                const log = new Logger();
                expect(log).toBeTruthy();
                expect(TsLogger).toHaveBeenCalled();
            });
            test('should return an instance given name and options', () => {
                const name = 'name';
                const log = new Logger(name);
                expect(log).toBeTruthy();
                expect(TsLogger).toHaveBeenCalledWith(name);
            });
            describe('instance', () => {
                let log;
                beforeEach(() => {
                    log = new Logger();
                    log.appenders = {
                        clear: jest.fn(),
                        set: jest.fn(),
                    };
                });
                describe('config', () => {
                    test('should be ok', () => {
                        expect(log.config).toBeTruthy();
                    });
                });
                describe('init', () => {
                    test('should init logger given default config', () => {
                        const opt = { level: 'warn' };
                        const result = log.init(opt);
                        expect(result).toBe(log);
                        expect(log.level).toEqual('warn');
                        expect(log.appenders.clear).toHaveBeenCalled();
                        expect(log.appenders.set).toHaveBeenCalledTimes(1);
                        expect(log.appenders.set).toHaveBeenCalledWith('console-log', { type: 'console' });
                    });
                    test('should init logger given default config with empty log level', () => {
                        const opt = { level: '' };
                        const result = log.init(opt);
                        expect(result).toBe(log);
                        expect(log.level).toEqual('warn');
                        expect(log.appenders.clear).toHaveBeenCalled();
                        expect(log.appenders.set).toHaveBeenCalledTimes(1);
                        expect(log.appenders.set).toHaveBeenCalledWith('console-log', { type: 'console' });
                    });
                    test('should init logger given config without appenders', () => {
                        const opt = { appenders: undefined };
                        const result = log.init(opt);
                        expect(result).toBe(log);
                        expect(log.level).toEqual('warn');
                        expect(log.appenders.clear).not.toHaveBeenCalled();
                        expect(log.appenders.set).not.toHaveBeenCalled();
                    });
                    test('should throw an error given bad log level', () => {
                        const opt = { level: 'badlevel' };
                        const fn = () => log.init(opt);
                        const expectedError = new Error('Unsupported log level : badlevel');
                        expect(fn).toThrow(expectedError);
                        expect(log.appenders.clear).not.toHaveBeenCalled();
                        expect(log.appenders.set).not.toHaveBeenCalled();
                    });
                });
                describe('log', () => {
                    let spyInfo;
                    beforeEach(() => {
                        spyInfo = jest.spyOn(Logger.prototype, 'info').mockImplementation();
                    });
                    afterEach(() => {
                        spyInfo.mockRestore();
                    });
                    test('should call info method', () => {
                        const args = ['foo', 'bar'];
                        log.log(...args);
                        expect(spyInfo).toHaveBeenCalledWith(...args);
                    });
                });
                describe('express', () => {
                    test('should handle on finished given x-forwarded-for request header', () => {
                        const req = {
                            headers: { 'x-forwarded-for': 'forwarded for' },
                            ip: '192.168.1.99',
                            method: 'get',
                            originalUrl: 'original url',
                        };
                        const res = {
                            get: jest.fn(),
                            statusCode: 200,
                        };
                        const next = jest.fn();
                        onFinished.mockImplementation((response, cb) => {
                            expect(response).toBe(res);
                            cb(undefined, res);
                        });
                        const result = log.express();
                        expect(result).toBeTruthy();
                        result(req, res, next);
                        expect(next).toHaveBeenCalled();
                        expect(onFinished).toHaveBeenCalledWith(res, expect.anything());
                        expect(res.get).toHaveBeenCalledWith('content-length');
                        expect(log.info).toHaveBeenCalledWith('http - 192.168.1.99 - get - original url - 200 - ?');
                    });
                    test('should handle error on finished', () => {
                        const req = {};
                        const res = {
                            get: jest.fn(),
                        };
                        const next = jest.fn();
                        const error = new Error('oops');
                        onFinished.mockImplementation((response, cb) => {
                            expect(response).toBe(res);
                            cb(error, res);
                        });
                        const result = log.express();
                        expect(result).toBeTruthy();
                        result(req, res, next);
                        expect(next).toHaveBeenCalled();
                        expect(onFinished).toHaveBeenCalledWith(res, expect.anything());
                        expect(res.get).not.toHaveBeenCalled();
                        expect(log.info).not.toHaveBeenCalled();
                    });
                    test('should handle on finished given ip', () => {
                        const req = {
                            ip: '192.168.1.99',
                            method: 'get',
                            originalUrl: 'original url',
                        };
                        const res = {
                            get: jest.fn(),
                            statusCode: 200,
                        };
                        const next = jest.fn();
                        onFinished.mockImplementation((response, cb) => {
                            expect(response).toBe(res);
                            cb(undefined, res);
                        });
                        const result = log.express();
                        expect(result).toBeTruthy();
                        result(req, res, next);
                        expect(next).toHaveBeenCalled();
                        expect(onFinished).toHaveBeenCalledWith(res, expect.anything());
                        expect(res.get).toHaveBeenCalledWith('content-length');
                        expect(log.info).toHaveBeenCalledWith('http - 192.168.1.99 - get - original url - 200 - ?');
                    });
                    test('should handle on finished given no status code', () => {
                        const req = {
                            ip: '192.168.1.99',
                            method: 'get',
                            originalUrl: 'original url',
                        };
                        const res = {
                            get: jest.fn(),
                        };
                        const next = jest.fn();
                        onFinished.mockImplementation((response, cb) => {
                            expect(response).toBe(res);
                            cb(undefined, res);
                        });
                        const result = log.express();
                        expect(result).toBeTruthy();
                        result(req, res, next);
                        expect(next).toHaveBeenCalled();
                        expect(onFinished).toHaveBeenCalledWith(res, expect.anything());
                        expect(res.get).toHaveBeenCalledWith('content-length');
                        expect(log.info).toHaveBeenCalledWith('http - 192.168.1.99 - get - original url - ? - ?');
                    });
                    test('should handle on finished given response content length', () => {
                        const req = {
                            ip: '192.168.1.99',
                            method: 'get',
                            originalUrl: 'original url',
                        };
                        const res = {
                            get: jest.fn(),
                            statusCode: 200,
                        };
                        const contentLength = 123;
                        res.get.mockImplementation(() => contentLength);
                        const next = jest.fn();
                        onFinished.mockImplementation((response, cb) => {
                            expect(response).toBe(res);
                            cb(undefined, res);
                        });
                        const result = log.express();
                        expect(result).toBeTruthy();
                        result(req, res, next);
                        expect(next).toHaveBeenCalled();
                        expect(onFinished).toHaveBeenCalledWith(res, expect.anything());
                        expect(res.get).toHaveBeenCalledWith('content-length');
                        expect(log.info).toHaveBeenCalledWith('http - 192.168.1.99 - get - original url - 200 - 123');
                    });
                });
                describe('trace', () => {
                    let spyIsLevelEnabled;
                    beforeEach(() => {
                        spyIsLevelEnabled = jest.spyOn(log, 'isLevelEnabled').mockImplementation(() => false);
                    });
                    afterEach(() => {
                        spyIsLevelEnabled.mockRestore();
                    });
                    test('should log trace with caller infos', () => {
                        const data = 'message';
                        const caller = {
                            file: 'sourcefile',
                            line: 4,
                        };
                        spyIsLevelEnabled.mockImplementation(() => true);
                        getCaller.mockReturnValue(caller);
                        TsLogger.prototype.write.mockReturnValue(log);
                        const result = log.trace(data);
                        expect(result).toBe(log);
                        expect(spyIsLevelEnabled).toHaveBeenCalledWith('trace');
                        expect(getCaller).toHaveBeenCalledWith(baseDir);
                        expect(TsLogger.prototype.write).toHaveBeenCalledWith('trace', 'sourcefile:4 - message');
                    });
                    test('should not log given trace level is disable', () => {
                        spyIsLevelEnabled.mockImplementation(() => false);
                        const data = 'message';
                        const result = log.trace(data);
                        expect(result).toBe(log);
                        expect(spyIsLevelEnabled).toHaveBeenCalledWith('trace');
                        expect(getCaller).not.toHaveBeenCalled();
                        expect(TsLogger.prototype.write).not.toHaveBeenCalled();
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3V0aWxzL2xvZ2dlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQThCO0FBSzlCLE1BQU0sT0FBTyxHQUFHLElBQUEsY0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUUxRCxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLElBQUksUUFBUSxDQUFBO0lBQ1osSUFBSSxTQUFvQixDQUFBO0lBQ3hCLElBQUksVUFBcUIsQ0FBQTtJQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDMUI7UUFBQSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FDeEM7UUFBQSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtJQUMxRCxDQUFDLENBQUMsQ0FBQTtJQUNGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN0QixRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO1lBQ25DLElBQUksV0FB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