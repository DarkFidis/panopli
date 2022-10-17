"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
const lodash_1 = require("lodash");
const service_base_1 = require("../../../main/services/service-base");
const jestExpress = require('jest-express');
const { set } = Reflect;
describe('web server unit tests', () => {
    const cluster = { worker: { id: 'myworkerid' } };
    let createHttpServer;
    let HttpServer;
    let createHttpsServer;
    let HttpsServer;
    let express;
    let Socket;
    let fsPromises;
    let log;
    let InternalError;
    let errorMw;
    let notFound;
    let toExpressErrorMw;
    let WebServer;
    beforeAll(() => {
        jest.doMock('../../../main/log');
        ({ log } = require('../../../main/log'));
        jest.doMock('http');
        ({ createServer: createHttpServer, Server: HttpServer } = require('http'));
        jest.doMock('https');
        ({ createServer: createHttpsServer, Server: HttpsServer } = require('https'));
        jest.doMock('cluster', () => cluster);
        const expressMock = jest.fn(jestExpress);
        expressMock.static = jestExpress.static;
        jest.doMock('express', () => expressMock);
        express = require('express');
        jest.doMock('net');
        ({ Socket } = require('net'));
        jest.doMock('fs');
        const fs = require('fs');
        fs.promises = { unlink: jest.fn() };
        fsPromises = fs.promises;
        jest.doMock('../../../main/errors/internal-error');
        ({ InternalError } = require('../../../main/errors/internal-error'));
        jest.doMock('../../../main/middlewares/error');
        ({ errorMw } = require('../../../main/middlewares/error'));
        jest.doMock('../../../main/middlewares/not-found');
        ({ notFound } = require('../../../main/middlewares/not-found'));
        const helper = require('../../../main/utils/helper');
        toExpressErrorMw = jest.spyOn(helper, 'toExpressErrorMw').mockImplementation(lodash_1.noop);
        ({ WebServer } = require('../../../main/services/web-server'));
    });
    describe('WebServer', () => {
        test('should provide a default config', () => {
            expect(WebServer.defaultConfig).toEqual({
                gitVersion: true,
                listen: {
                    port: 8342,
                },
                log: true,
                ping: true,
                poweredBy: 'Express-template',
                trustProxy: false,
            });
        });
        describe('constructor', () => {
            test('should return an instance', () => {
                const result = new WebServer(log);
                expect(result).toBeTruthy();
                expect(result).toBeInstanceOf(WebServer);
                expect(result).toHaveProperty('app', undefined);
                expect(result).toHaveProperty('url', undefined);
                expect(result).toHaveProperty('server', undefined);
            });
        });
        describe('instance', () => {
            let webServer;
            beforeAll(() => {
                webServer = new WebServer(log);
            });
            beforeEach(() => {
                webServer._server = new HttpServer();
                webServer.server.close.mockImplementation((cb) => {
                    setImmediate(cb);
                });
            });
            describe('end', () => {
                test('should close the web server and return true', async () => {
                    const result = await webServer.end();
                    expect(result).toBe(true);
                    expect(webServer.server).toBeTruthy();
                    expect(webServer.server.removeAllListeners).toHaveBeenCalledTimes(1);
                    expect(webServer.server.close).toHaveBeenCalledTimes(1);
                });
                test('should return false given undefined server', async () => {
                    webServer._server = undefined;
                    const result = await webServer.end();
                    expect(result).toBe(false);
                });
                test('should close server sockets', async () => {
                    const socket = { destroy: jest.fn() };
                    webServer._sockets = [socket];
                    const result = await webServer.end();
                    expect(result).toBe(true);
                    expect(socket.destroy).toHaveBeenCalledWith();
                });
                test('should reject given close throws error', async () => {
                    const errorMessage = 'oops';
                    webServer.server.close.mockImplementation(() => {
                        throw new Error(errorMessage);
                    });
                    try {
                        await webServer.end();
                    }
                    catch (err) {
                        expect(err.message).toBe(errorMessage);
                        expect(webServer.server).toBeTruthy();
                        expect(webServer.server.removeAllListeners).toHaveBeenCalledTimes(1);
                        expect(webServer.server.close).toHaveBeenCalledTimes(1);
                        return;
                    }
                    throw new Error('Promise did not reject');
                });
            });
            describe('init', () => {
                let spyRegisterMw;
                let spyServiceBaseInit;
                beforeAll(() => {
                    spyRegisterMw = jest.spyOn(webServer, 'registerMw').mockImplementation();
                    spyServiceBaseInit = jest.spyOn(service_base_1.ServiceBase.prototype, 'init').mockImplementation();
                });
                afterAll(() => {
                    spyServiceBaseInit.mockRestore();
                    spyRegisterMw.mockRestore();
                });
                afterEach(() => {
                    webServer._config = { ...WebServer.defaultConfig };
                });
                test('should initialize the server given defaults', () => {
                    const opt = undefined;
                    webServer.init(opt);
                    expect(spyServiceBaseInit).toHaveBeenCalledWith(opt);
                    expect(express).toHaveBeenCalled();
                    expect(webServer.app).toBeTruthy();
                    expect(webServer.registerMw).toHaveBeenCalled();
                });
            });
            describe('run', () => {
                let mockHttpServer;
                let mockHttpsServer;
                beforeAll(() => {
                    mockHttpServer = new HttpServer();
                    mockHttpsServer = new HttpsServer();
                });
                beforeEach(() => {
                    webServer._app = express();
                    delete webServer._server;
                    delete webServer._url;
                    webServer._config = {};
                    fsPromises.unlink.mockImplementation();
                });
                test('should create a http server listening on given port', async () => {
                    webServer._sockets = [];
                    webServer.config.listen = {
                        path: undefined,
                        port: 12345,
                    };
                    (0, jest_when_1.when)(createHttpServer).calledWith(webServer.app).mockReturnValue(mockHttpServer);
                    mockHttpServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpServer;
                    });
                    mockHttpServer.address.mockImplementation(() => ({
                        port: webServer.config.listen.port,
                    }));
                    const socket = new Socket();
                    socket.once.mockImplementation((event, listener) => {
                        if (event === 'close') {
                            listener();
                        }
                    });
                    mockHttpServer.on.mockImplementation((event, listener) => {
                        if (event === 'connection') {
                            listener(socket);
                        }
                    });
                    const result = await webServer.run();
                    expect(result).toBe(true);
                    expect(createHttpServer).toHaveBeenNthCalledWith(1, webServer.app);
                    expect(mockHttpServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                    expect(webServer.server).toBeTruthy();
                    expect(webServer.server.address).toHaveBeenCalled();
                    expect(webServer.url).toEqual(`http://127.0.0.1:${webServer.config.listen.port}`);
                    expect(mockHttpServer.on).toHaveBeenCalledWith('connection', expect.any(Function));
                    expect(socket.once).toHaveBeenCalledWith('close', expect.any(Function));
                    expect(webServer._sockets.length).toBe(0);
                });
                test('should create a https server listening on given port', async () => {
                    webServer._sockets = [];
                    webServer.config.tls = true;
                    webServer.config.listen = {
                        path: undefined,
                        port: 12345,
                    };
                    (0, jest_when_1.when)(createHttpsServer).calledWith(webServer.app).mockReturnValue(mockHttpsServer);
                    mockHttpsServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpsServer;
                    });
                    mockHttpsServer.address.mockImplementation(() => ({
                        port: webServer.config.listen.port,
                    }));
                    const socket = new Socket();
                    socket.once.mockImplementation((event, listener) => {
                        if (event === 'close') {
                            listener();
                        }
                    });
                    mockHttpsServer.on.mockImplementation((event, listener) => {
                        if (event === 'connection') {
                            listener(socket);
                        }
                    });
                    const result = await webServer.run();
                    expect(result).toBe(true);
                    expect(createHttpsServer).toHaveBeenNthCalledWith(1, webServer.app);
                    expect(mockHttpsServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                    expect(webServer.server).toBeTruthy();
                    expect(webServer.server.address).toHaveBeenCalled();
                    expect(webServer.url).toEqual(`https://127.0.0.1:${webServer.config.listen.port}`);
                    expect(mockHttpsServer.on).toHaveBeenCalledWith('connection', expect.any(Function));
                    expect(socket.once).toHaveBeenCalledWith('close', expect.any(Function));
                    expect(webServer._sockets.length).toBe(0);
                });
                test('should create a https server listening on given port with given agent options', async () => {
                    webServer._sockets = [];
                    const serverOptions = {
                        cert: 'mycert',
                        key: 'mykey',
                    };
                    webServer.config.serverOptions = serverOptions;
                    webServer.config.tls = true;
                    webServer.config.listen = {
                        path: undefined,
                        port: 12345,
                    };
                    (0, jest_when_1.when)(createHttpsServer)
                        .calledWith(serverOptions, webServer.app)
                        .mockReturnValue(mockHttpsServer);
                    mockHttpsServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpsServer;
                    });
                    mockHttpsServer.address.mockImplementation(() => ({
                        port: webServer.config.listen.port,
                    }));
                    const socket = new Socket();
                    socket.once.mockImplementation((event, listener) => {
                        if (event === 'close') {
                            listener();
                        }
                    });
                    mockHttpsServer.on.mockImplementation((event, listener) => {
                        if (event === 'connection') {
                            listener(socket);
                        }
                    });
                    const result = await webServer.run();
                    expect(result).toBe(true);
                    expect(createHttpsServer).toHaveBeenNthCalledWith(1, serverOptions, webServer.app);
                    expect(mockHttpsServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                    expect(webServer.server).toBeTruthy();
                    expect(webServer.server.address).toHaveBeenCalled();
                    expect(webServer.url).toEqual(`https://127.0.0.1:${webServer.config.listen.port}`);
                    expect(mockHttpsServer.on).toHaveBeenCalledWith('connection', expect.any(Function));
                    expect(socket.once).toHaveBeenCalledWith('close', expect.any(Function));
                    expect(webServer._sockets.length).toBe(0);
                });
                test('should create a server listening on given port given a base url in config', async () => {
                    webServer._sockets = [];
                    webServer.config.baseUrl = 'mybaseurl';
                    webServer.config.listen = {
                        path: undefined,
                        port: 12345,
                    };
                    (0, jest_when_1.when)(createHttpServer).calledWith(webServer.app).mockReturnValue(mockHttpServer);
                    mockHttpServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpServer;
                    });
                    const socket = new Socket();
                    socket.once.mockImplementation((event, listener) => {
                        if (event === 'close') {
                            listener();
                        }
                    });
                    mockHttpServer.on.mockImplementation((event, listener) => {
                        if (event === 'connection') {
                            listener(socket);
                        }
                    });
                    const result = await webServer.run();
                    expect(result).toBe(true);
                    expect(webServer.server).toBeTruthy();
                    expect(createHttpServer).toHaveBeenNthCalledWith(1, webServer.app);
                    expect(mockHttpServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                    expect(webServer.server.address).not.toHaveBeenCalled();
                    expect(webServer.url).toEqual(webServer.config.baseUrl);
                    expect(mockHttpServer.on).toHaveBeenCalledWith('connection', expect.any(Function));
                    expect(socket.once).toHaveBeenCalledWith('close', expect.any(Function));
                    expect(webServer._sockets.length).toBe(0);
                });
                test('should throw an error given undefined app', async () => {
                    webServer._app = undefined;
                    try {
                        await webServer.run();
                    }
                    catch (err) {
                        expect(err).toBeInstanceOf(InternalError);
                        expect(InternalError).toHaveBeenNthCalledWith(1, 'undefined app : cannot listen');
                        expect(webServer.server).toBeUndefined();
                        expect(webServer.url).toBeUndefined();
                        return;
                    }
                    throw new Error('Promise did not reject');
                });
                test('should throw an error given unlink unix socket fail', async () => {
                    webServer.config.listen = { path: 'my unix socket' };
                    const error = new Error('oops');
                    fsPromises.unlink.mockImplementation(() => Promise.reject(error));
                    try {
                        await webServer.run();
                    }
                    catch (err) {
                        expect(err.message).toBe(error.message);
                        expect(fsPromises.unlink).toHaveBeenCalledWith(webServer.config.listen.path);
                        expect(webServer.server).toBeUndefined();
                        expect(webServer.url).toBeUndefined();
                        return;
                    }
                    throw new Error('Promise did not reject');
                });
                test('should create a server without url given no server address', async () => {
                    webServer.config.listen = { port: 12345 };
                    (0, jest_when_1.when)(createHttpServer).calledWith(webServer.app).mockReturnValue(mockHttpServer);
                    mockHttpServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpServer;
                    });
                    mockHttpServer.address.mockImplementation(() => undefined);
                    try {
                        await webServer.run();
                    }
                    catch (err) {
                        expect(err).toBeInstanceOf(InternalError);
                        expect(InternalError).toHaveBeenNthCalledWith(1, 'server address is undefined');
                        expect(createHttpServer).toHaveBeenNthCalledWith(1, webServer.app);
                        expect(mockHttpServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                        expect(mockHttpServer.address).toHaveBeenCalled();
                        expect(webServer.server).toBe(mockHttpServer);
                        expect(webServer.url).toBeUndefined();
                        return;
                    }
                    throw new Error('Promise did not reject');
                });
                test('should create a server listening on given unix socket path', async () => {
                    webServer.config.listen = { path: 'my unix socket' };
                    (0, jest_when_1.when)(createHttpServer).calledWith(webServer.app).mockReturnValue(mockHttpServer);
                    mockHttpServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpServer;
                    });
                    mockHttpServer.address.mockImplementation(() => webServer.config.listen.path);
                    const result = await webServer.run();
                    expect(result).toBe(true);
                    expect(fsPromises.unlink).toHaveBeenCalledWith(webServer.config.listen.path);
                    expect(createHttpServer).toHaveBeenNthCalledWith(1, webServer.app);
                    expect(mockHttpServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                    expect(mockHttpServer.address).toHaveBeenCalled();
                    expect(webServer.server).toBe(mockHttpServer);
                    expect(webServer.url).toEqual(`http://unix:${webServer.config.listen.path}:`);
                });
                test('should run given a new unix socket', async () => {
                    webServer.config.listen = { path: 'my unix socket' };
                    const error = new Error('file does not exist');
                    set(error, 'code', 'ENOENT');
                    fsPromises.unlink.mockImplementation(() => {
                        throw error;
                    });
                    (0, jest_when_1.when)(createHttpServer).calledWith(webServer.app).mockReturnValue(mockHttpServer);
                    mockHttpServer.listen.mockImplementation((__, cb) => {
                        setImmediate(cb);
                        return mockHttpServer;
                    });
                    mockHttpServer.address.mockImplementation(() => webServer.config.listen.path);
                    const result = await webServer.run();
                    expect(result).toBe(true);
                    expect(fsPromises.unlink).toHaveBeenCalledWith(webServer.config.listen.path);
                    expect(createHttpServer).toHaveBeenNthCalledWith(1, webServer.app);
                    expect(mockHttpServer.listen).toHaveBeenCalledWith(webServer.config.listen, expect.anything());
                    expect(mockHttpServer.address).toHaveBeenCalled();
                    expect(webServer.server).toBe(mockHttpServer);
                    expect(webServer.url).toEqual(`http://unix:${webServer.config.listen.path}:`);
                });
            });
            describe('registerMw', () => {
                let app;
                let disableEtag;
                let setTrustProxy;
                let registerLogMw;
                let registerPingMw;
                beforeAll(() => {
                    app = express();
                    disableEtag = jest.spyOn(webServer, 'disableEtag').mockImplementation();
                    setTrustProxy = jest.spyOn(webServer, 'setTrustProxy').mockImplementation();
                    registerLogMw = jest.spyOn(webServer, 'registerLogMw').mockImplementation();
                    registerPingMw = jest.spyOn(webServer, 'registerPingMw').mockImplementation();
                });
                beforeEach(() => {
                    delete webServer.registerAppMw;
                });
                afterAll(() => {
                    disableEtag.mockRestore();
                    setTrustProxy.mockRestore();
                    registerLogMw.mockRestore();
                    registerPingMw.mockRestore();
                });
                test('should register middlewares', () => {
                    const logExpressMw = 'log-express';
                    log.express.mockImplementation(() => logExpressMw);
                    const errorExpressMw = jest.fn();
                    (0, jest_when_1.when)(toExpressErrorMw).calledWith(errorMw).mockReturnValue(errorExpressMw);
                    webServer.registerMw(app);
                    expect(disableEtag).toHaveBeenCalledWith(app);
                    expect(setTrustProxy).toHaveBeenCalledWith(app);
                    expect(registerLogMw).toHaveBeenCalledWith(app);
                    expect(registerPingMw).toHaveBeenCalledWith(app);
                    expect(app.use).toHaveBeenCalledWith(notFound);
                    expect(toExpressErrorMw).toHaveBeenCalledWith(errorMw);
                    expect(app.use).toHaveBeenCalledWith(errorExpressMw);
                });
                test('should register middlewares given registerAppMw is defined', () => {
                    webServer.registerApp = jest.fn();
                    const logExpressMw = 'log-express';
                    log.express.mockImplementation(() => logExpressMw);
                    const errorExpressMw = jest.fn();
                    (0, jest_when_1.when)(toExpressErrorMw).calledWith(errorMw).mockReturnValue(errorExpressMw);
                    webServer.registerMw(app);
                    expect(disableEtag).toHaveBeenCalledWith(app);
                    expect(setTrustProxy).toHaveBeenCalledWith(app);
                    expect(registerLogMw).toHaveBeenCalledWith(app);
                    expect(registerPingMw).toHaveBeenCalledWith(app);
                    expect(webServer.registerApp).toHaveBeenCalledWith(app);
                    expect(app.use).toHaveBeenCalledWith(notFound);
                    expect(toExpressErrorMw).toHaveBeenCalledWith(errorMw);
                    expect(app.use).toHaveBeenCalledWith(errorExpressMw);
                });
            });
            describe('disableEtag', () => {
                test('should not disable etag given etag config', () => {
                    webServer._config = { etag: true };
                    const app = express();
                    webServer.disableEtag(app);
                    expect(app.disable).not.toHaveBeenCalled();
                });
                test('should disable etag by default', () => {
                    webServer._config = {};
                    const app = express();
                    webServer.disableEtag(app);
                    expect(app.disable).toHaveBeenCalledWith('etag');
                });
            });
            describe('setTrustProxy', () => {
                test('should set trust proxy', () => {
                    webServer._config = { trustProxy: '127.0.0.1' };
                    const app = express();
                    webServer.setTrustProxy(app);
                    expect(app.set).toHaveBeenCalledWith('trust proxy', webServer.config.trustProxy);
                });
                test('should not set trust proxy given trust proxy is undefined in config', () => {
                    webServer._config = {};
                    const app = express();
                    webServer.setTrustProxy(app);
                    expect(app.set).not.toHaveBeenCalledWith('trust proxy', expect.any);
                });
            });
            describe('registerLogMw', () => {
                test('should register log mw', () => {
                    webServer._config = { log: true };
                    const app = express();
                    const logExpressMw = jest.fn();
                    (0, jest_when_1.when)(log.express).calledWith().mockReturnValue(logExpressMw);
                    webServer.registerLogMw(app);
                    expect(log.express).toHaveBeenCalledWith();
                    expect(app.use).toHaveBeenCalledWith(logExpressMw);
                });
                test('should not register log middleware given log is false in config', () => {
                    webServer._config = { log: false };
                    const app = express();
                    webServer.registerLogMw(app);
                    expect(log.express).not.toHaveBeenCalled();
                    expect(app.use).not.toHaveBeenCalled();
                });
            });
            describe('registerPingMw', () => {
                test('should register ping middleware', () => {
                    webServer._config = { ping: true };
                    const app = express();
                    (0, jest_when_1.when)(app.get)
                        .calledWith('/ping', expect.any(Function))
                        .mockImplementation((__, cb) => {
                        const end = jest.fn();
                        const res = { status: jest.fn().mockReturnValue({ end }) };
                        cb(undefined, res);
                        expect(res.status).toHaveBeenCalledWith(204);
                        expect(end).toHaveBeenCalledWith();
                    });
                    webServer.registerPingMw(app);
                    expect(app.get).toHaveBeenCalledWith('/ping', expect.any(Function));
                });
                test('should not register ping middleware given ping is false in config', () => {
                    webServer._config = { ping: false };
                    const app = express();
                    webServer.registerPingMw(app);
                    expect(app.get).not.toHaveBeenCalled();
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNlcnZlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3Rlc3QvdW5pdC9zZXJ2aWNlcy93ZWItc2VydmVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBZ0M7QUFDaEMsbUNBQTZCO0FBRTdCLHNFQUFpRTtBQUtqRSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFM0MsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQTtBQUV2QixRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLE1BQU0sT0FBTyxHQUFnQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFBO0lBQzdFLElBQUksZ0JBQTJCLENBQUE7SUFDL0IsSUFBSSxVQUFxQixDQUFBO0lBQ3pCLElBQUksaUJBQTRCLENBQUE7SUFDaEMsSUFBSSxXQUFzQixDQUFBO0lBQzFCLElBQUksT0FBd0MsQ0FBQTtJQUM1QyxJQUFJLE1BQWlCLENBQUE7SUFDckIsSUFBSSxVQUFpQyxDQUFBO0lBQ3JDLElBQUksR0FBNEIsQ0FBQTtJQUNoQyxJQUFJLGFBQXdCLENBQUE7SUFDNUIsSUFBSSxPQUF5QyxDQUFBO0lBQzdDLElBQUksUUFBcUMsQ0FBQTtJQUN6QyxJQUFJLGdCQUFrQyxDQUFBO0lBQ3RDLElBQUksU0FBOEIsQ0FBQTtJQUNsQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUMvQjtRQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ2xCO1FBQUEsQ0FBQyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUs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