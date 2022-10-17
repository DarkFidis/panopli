import { HttpError } from './http-error';
declare class GatewayTimeoutError extends HttpError {
    static readonly defaultMessage = "Service did not respond in time";
    constructor(message?: string | Error, orig?: Error, extra?: unknown);
}
export { GatewayTimeoutError };
