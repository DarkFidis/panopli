import { Loggerable } from '../types/logger';
import { Initializable } from '../types/service';
declare abstract class InitBase<T> implements Initializable<T> {
    protected _defaultConfig: T;
    protected _config: T;
    protected readonly _name: string;
    protected readonly _log: Loggerable;
    protected constructor(name: string, log: Loggerable, defaultConfig?: T);
    get name(): string;
    get config(): T;
    get defaultConfig(): T;
    init(opt?: Partial<T>): void;
}
export { InitBase };
