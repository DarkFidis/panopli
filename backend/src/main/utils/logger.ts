import { NextFunction, Request, Response } from 'express'
import { first, forIn, tail } from 'lodash'
import * as onFinished from 'on-finished'
import { resolve } from 'path'
import { IAppenderConfiguration, IBasicLayoutConfiguration, Logger as TsLogger } from 'ts-log-debug'

import { Mapable } from '../types/basic-types'
import { Caller } from '../types/caller'
import { Loggerable, LoggerConfig, LogLevel, StaticLoggerable } from '../types/logger'
import { getCaller } from './caller'
import { staticImplements } from './helper'

const baseDir = resolve(__dirname, '..', '..', '..')

const env = process.env.NODE_CONFIG_ENV || process.env.NODE_ENV || 'production'

let defaultLogLevel: LogLevel = 'warn'
let defaultLayout: IBasicLayoutConfiguration | undefined
let defaultAppenders: Mapable<IAppenderConfiguration> | undefined

switch (env) {
  case 'production':
    {
      defaultLayout = {
        pattern: '%d %p %c %x{workerId} %m',
        type: 'pattern',
      }
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
      }
    }
    break
  case 'test':
    {
      defaultAppenders = { 'console-log': { type: 'console' } }
    }
    break
  case 'development':
  default: {
    defaultLogLevel = 'info'
    defaultAppenders = { 'console-log': { type: 'console' } }
  }
}

@staticImplements<StaticLoggerable>()
class Logger extends TsLogger implements Loggerable {
  public static readonly defaultLoggerConfig: LoggerConfig = {
    appenders: defaultAppenders,
    layout: defaultLayout,
    level: defaultLogLevel,
  }

  protected readonly _config: LoggerConfig = { ...Logger.defaultLoggerConfig }

  public static readonly LogLevels: LogLevel[] = ['debug', 'info', 'warn', 'error', 'fatal']

  constructor(name?: string) {
    super(name)
  }

  public get config(): LoggerConfig {
    return this._config
  }

  public init(opt?: Partial<LoggerConfig>): Logger {
    Object.assign(this.config, opt)
    if (this.config.level) {
      if (!Object.values(Logger.LogLevels).includes(this.config.level)) {
        throw new Error(`Unsupported log level : ${this.config.level}`)
      }
      this.level = this.config.level
    } else {
      this.level = Logger.defaultLoggerConfig.level
    }
    if (this.config.appenders) {
      this.appenders.clear()
      forIn(this.config.appenders, (config: IAppenderConfiguration, name: string) => {
        this.appenders.set(name, Object.assign({}, config))
      })
    }
    return this
  }

  public log(...args: unknown[]): void {
    this.info(...args)
  }

  public express() {
    return (req: Request, response: Response, next: NextFunction): void => {
      onFinished(response, (err, res) => {
        if (err) {
          this.error(err)
          return
        }
        const { ip } = req
        const statusCode = typeof res.statusCode !== 'undefined' ? res.statusCode : '?'
        const resContentLength = res.get('content-length')
        const contentLength = typeof resContentLength !== 'undefined' ? resContentLength : '?'
        this.info(
          `http - ${ip} - ${req.method} - ${req.originalUrl} - ${statusCode} - ${contentLength}`,
        )
      })
      next()
    }
  }

  public trace(...data: unknown[]): Logger {
    if (!this.isLevelEnabled('trace')) {
      return this
    }
    const caller: Caller = getCaller(baseDir)
    const write = this['write']
    return write('trace', `${caller.file}:${caller.line} - ${first(data)}`, ...tail(data))
  }
}

export { Logger }
