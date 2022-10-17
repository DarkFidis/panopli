import { Loggerable } from '../types/logger';
import { Serviceable, ServiceStateable } from '../types/service';
import { InitBase } from './init-base';
declare abstract class ServiceBase<T> extends InitBase<T> implements Serviceable<T> {
    protected _state: ServiceStateable;
    protected constructor(name: string, log: Loggerable, defaultConfig?: T);
    get state(): ServiceStateable;
    abstract end(): Promise<boolean>;
    init(opt?: Partial<T>): void;
    abstract run(): Promise<boolean>;
    start(): Promise<boolean>;
    stop(): Promise<boolean>;
}
export { ServiceBase };
