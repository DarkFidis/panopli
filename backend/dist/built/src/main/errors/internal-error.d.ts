import { HttpError } from './http-error';
declare class InternalError extends HttpError {
    constructor(message?: string | Error, orig?: Error);
}
export { InternalError };
