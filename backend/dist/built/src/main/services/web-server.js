"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WebServer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebServer = void 0;
const express = require("express");
const fs_1 = require("fs");
const http_1 = require("http");
const https_1 = require("https");
const lodash_1 = require("lodash");
const internal_error_1 = require("../errors/internal-error");
const error_1 = require("../middlewares/error");
const not_found_1 = require("../middlewares/not-found");
const helper_1 = require("../utils/helper");
const service_base_1 = require("./service-base");
let WebServer = WebServer_1 = class WebServer extends service_base_1.ServiceBase {
    constructor(log, registerApp) {
        super('web-server', log, WebServer_1.defaultConfig);
        this._sockets = [];
        this.registerApp = registerApp;
    }
    get app() {
        return this._app;
    }
    get url() {
        return this._url;
    }
    get server() {
        return this._server;
    }
    async end() {
        const server = this.server;
        if (!server) {
            return false;
        }
        if (this._sockets.length) {
            this._sockets.forEach((socket, index) => {
                this._log.trace('destroying socket #%s', index + 1);
                socket.destroy();
            });
        }
        server.removeAllListeners();
        await (0, helper_1.fromCallback)((cb) => {
            try {
                server.close(() => {
                    this._log.info('web server is closed');
                    cb(undefined);
                });
            }
            catch (err) {
                cb(err);
            }
        });
        return true;
    }
    init(opt) {
        super.init(opt);
        const app = express();
        this._app = app;
        this.registerMw(app);
    }
    async run() {
        const app = this.app;
        if (!app) {
            throw new internal_error_1.InternalError('undefined app : cannot listen');
        }
        if (this.config.listen.path) {
            try {
                await fs_1.promises.unlink(this.config.listen.path);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    throw err;
                }
            }
        }
        const listenOpts = (0, lodash_1.omitBy)(this.config.listen, lodash_1.isNil);
        const createServer = this.config.tls ? https_1.createServer : http_1.createServer;
        const server = this.config.serverOptions
            ? createServer(this.config.serverOptions, app)
            : createServer(app);
        await (0, helper_1.fromCallback)((cb) => {
            server.listen(listenOpts, () => {
                cb(undefined);
            });
        });
        const serverConnectionHandler = (socket) => {
            this._sockets.push(socket);
            const socketId = this._sockets.length;
            this._log.trace('new socket (#%s)', socketId);
            socket.once('close', () => {
                this._log.trace('socket #%s closed', socketId);
                this._sockets.splice(socketId - 1, 1);
            });
        };
        this._serverConnectionHandler = serverConnectionHandler;
        server.on('connection', serverConnectionHandler);
        this._server = server;
        if (this.config.baseUrl) {
            this._url = this.config.baseUrl;
        }
        else {
            const serverAddress = server.address();
            if (!serverAddress) {
                this._url = undefined;
                throw new internal_error_1.InternalError('server address is undefined');
            }
            const scheme = this.config.tls ? 'https' : 'http';
            if (typeof serverAddress === 'string') {
                this._url = `${scheme}://unix:${serverAddress}:`;
            }
            else {
                const { port } = serverAddress;
                const hostname = this.config.listen.host || '127.0.0.1';
                this._url = `${scheme}://${hostname}:${port}`;
            }
        }
        this._log.info(`web server ready : ${this.url} …`);
        return true;
    }
    registerMw(app) {
        this.disableEtag(app);
        this.setTrustProxy(app);
        this.registerLogMw(app);
        this.registerPingMw(app);
        if (this.registerApp) {
            this.registerApp(app);
        }
        app.use(not_found_1.notFound);
        app.use((0, helper_1.toExpressErrorMw)(error_1.errorMw));
    }
    disableEtag(app) {
        if (this.config.etag) {
            return;
        }
        app.disable('etag');
    }
    setTrustProxy(app) {
        if (typeof this.config.trustProxy === 'undefined') {
            return;
        }
        app.set('trust proxy', this.config.trustProxy);
    }
    registerLogMw(app) {
        if (!this.config.log) {
            return;
        }
        app.use(this._log.express());
    }
    registerPingMw(app) {
        if (!this.config.ping) {
            return;
        }
        app.get('/ping', (__, res) => {
            res.status(204).end();
        });
    }
};
WebServer.defaultConfig = {
    gitVersion: true,
    listen: { port: 8342 },
    log: true,
    ping: true,
    poweredBy: 'Express-template',
    trustProxy: false,
};
WebServer = WebServer_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Function])
], WebServer);
exports.WebServer = WebServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL3NlcnZpY2VzL3dlYi1zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQywyQkFBMkM7QUFDM0MsK0JBQTZFO0FBQzdFLGlDQUFnRjtBQUNoRixtQ0FBc0M7QUFHdEMsNkRBQXdEO0FBQ3hELGdEQUE4QztBQUM5Qyx3REFBbUQ7QUFTbkQsNENBQWtGO0FBQ2xGLGlEQUE0QztBQUc1QyxJQUFNLFNBQVMsaUJBQWYsTUFBTSxTQUFVLFNBQVEsMEJBQTRCO0lBa0JsRCxZQUFZLEdBQWUsRUFBRSxXQUF5QjtRQUNwRCxLQUFLLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxXQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7UUFKekMsYUFBUSxHQUFhLEVBQUUsQ0FBQTtRQUsvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUc7UUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFL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