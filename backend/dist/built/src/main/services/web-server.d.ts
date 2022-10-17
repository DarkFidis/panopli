/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as express from 'express';
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
import { Socket } from 'net';
import { Loggerable } from '../types/logger';
import { RegisterApp, WebServerable, WebServerConfig } from '../types/web-server';
import { ServiceBase } from './service-base';
declare class WebServer extends ServiceBase<WebServerConfig> implements WebServerable {
    static readonly defaultConfig: WebServerConfig;
    registerApp?: RegisterApp;
    protected _app?: express.Application;
    protected _server?: HttpServer | HttpsServer;
    protected _url?: string;
    protected _sockets: Socket[];
    protected _serverConnectionHandler?: (socket: Socket) => void;
    constructor(log: Loggerable, registerApp?: RegisterApp);
    get app(): express.Application | undefined;
    get url(): string | undefined;
    get server(): HttpServer | HttpsServer | undefined;
    end(): Promise<boolean>;
    init(opt?: Partial<WebServerConfig>): void;
    run(): Promise<boolean>;
    registerMw(app: express.Application): void;
    disableEtag(app: express.Application): void;
    setTrustProxy(app: express.Application): void;
    registerLogMw(app: express.Application): void;
    registerPingMw(app: express.Application): void;
}
export { WebServer };
