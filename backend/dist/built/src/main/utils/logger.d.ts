import { NextFunction, Request, Response } from 'express';
import { Logger as TsLogger } from 'ts-log-debug';
import { Loggerable, LoggerConfig, LogLevel } from '../types/logger';
declare class Logger extends TsLogger implements Loggerable {
    static readonly defaultLoggerConfig: LoggerConfig;
    protected readonly _config: LoggerConfig;
    static readonly LogLevels: LogLevel[];
    constructor(name?: string);
    get config(): LoggerConfig;
    init(opt?: Partial<LoggerConfig>): Logger;
    log(...args: unknown[]): void;
    express(): (req: Request, response: Response, next: NextFunction) => void;
    trace(...data: unknown[]): Logger;
}
export { Logger };
