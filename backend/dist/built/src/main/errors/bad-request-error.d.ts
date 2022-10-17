import { HttpError } from './http-error';
declare class BadRequestError extends HttpError {
    constructor(message?: string | Error, orig?: Error);
}
export { BadRequestError };
