import { HttpError } from './http-error';
declare class ServiceUnavailableError extends HttpError {
    static defaultMessage: string;
    constructor(message?: string | Error, orig?: Error, extra?: unknown);
}
export { ServiceUnavailableError };
