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
var Logger_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const lodash_1 = require("lodash");
const onFinished = require("on-finished");
const path_1 = require("path");
const ts_log_debug_1 = require("ts-log-debug");
const caller_1 = require("./caller");
const helper_1 = require("./helper");
const baseDir = (0, path_1.resolve)(__dirname, '..', '..', '..');
const env = process.env.NODE_CONFIG_ENV || process.env.NODE_ENV || 'production';
let defaultLogLevel = 'warn';
let defaultLayout;
let defaultAppenders;
switch (env) {
    case 'production':
        {
            defaultLayout = {
                pattern: '%d %p %c %x{workerId} %m',
                type: 'pattern',
            };
            defaultAppenders = {
                errlog: {
                    layout: defaultLayout,
                    levels: ['error', 'fatal', 'warn'],
                    type: 'stderr',
                },
                stdlog: {
                    layout: defaultLayout,
                    levels: ['trace', 'debug', 'info'],
                    type: 'stdout',
                },
            };
        }
        break;
    case 'test':
        {
            defaultAppenders = { 'console-log': { type: 'console' } };
        }
        break;
    case 'development':
    default: {
        defaultLogLevel = 'info';
        defaultAppenders = { 'console-log': { type: 'console' } };
    }
}
let Logger = Logger_1 = class Logger extends ts_log_debug_1.Logger {
    constructor(name) {
        super(name);
        this._config = { ...Logger_1.defaultLoggerConfig };
    }
    get config() {
        return this._config;
    }
    init(opt) {
        Object.assign(this.config, opt);
        if (this.config.level) {
            if (!Object.values(Logger_1.LogLevels).includes(this.config.level)) {
                throw new Error(`Unsupported log level : ${this.config.level}`);
            }
            this.level = this.config.level;
        }
        else {
            this.level = Logger_1.defaultLoggerConfig.level;
        }
        if (this.config.appenders) {
            this.appenders.clear();
            (0, lodash_1.forIn)(this.config.appenders, (config, name) => {
                this.appenders.set(name, Object.assign({}, config));
            });
        }
        return this;
    }
    log(...args) {
        this.info(...args);
    }
    express() {
        return (req, response, next) => {
            onFinished(response, (err, res) => {
                if (err) {
                    this.error(err);
                    return;
                }
                const { ip } = req;
                const statusCode = typeof res.statusCode !== 'undefined' ? res.statusCode : '?';
                const resContentLength = res.get('content-length');
                const contentLength = typeof resContentLength !== 'undefined' ? resContentLength : '?';
                this.info(`http - ${ip} - ${req.method} - ${req.originalUrl} - ${statusCode} - ${contentLength}`);
            });
            next();
        };
    }
    trace(...data) {
        if (!this.isLevelEnabled('trace')) {
            return this;
        }
        const caller = (0, caller_1.getCaller)(baseDir);
        const write = this['write'];
        return write('trace', `${caller.file}:${caller.line} - ${(0, lodash_1.first)(data)}`, ...(0, lodash_1.tail)(data));
    }
};
Logger.defaultLoggerConfig = {
    appenders: defaultAppenders,
    layout: defaultLayout,
    level: defaultLogLevel,
};
Logger.LogLevels = ['debug', 'info', 'warn', 'error', 'fatal'];
Logger = Logger_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [String])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vdXRpbHMvbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLCtCQUE4QjtBQUM5QiwrQ0FBb0c7QUFLcEcscUNBQW9DO0FBQ3BDLHFDQUEyQztBQUUzQyxNQUFNLE9BQU8sR0FBRyxJQUFBLGNBQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUVwRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUE7QUFFL0UsSUFBSSxlQUFlLEdBQWEsTUFBTSxDQUFBO0FBQ3RDLElBQUksYUFBb0QsQ0FBQTtBQUN4RCxJQUFJLGdCQUE2RCxDQUFBO0FBRWpFLFFBQVEsR0FBRyxFQUFFO0lBQ1gsS0FBSyxZQUFZO1FBQ2Y7WUFDRSxhQUFhLEdBQUc7Z0JBQ2QsT0FBTyxFQUFFLDBCQUEwQjtnQkFDbkMsSUFBSSxFQUFFLFNBQVM7YUFDaEIsQ0FBQTtZQUNELGdCQUFnQixHQUFHO2dCQUNqQixNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO29CQUNsQyxJQUFJLEVBQUUsUUFBUTtpQkFDZjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sTUFBTSxFQUFFLGFBQWE7b0JBQ3JCLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO29CQUNsQyxJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGLENBQUE7U0FDRjtRQUNELE1BQUs7SUFDUCxLQUFLLE1BQU07UUFDVDtZQUNFLGdCQUFnQixHQUFHLEVBQUUsYUFBYSxF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