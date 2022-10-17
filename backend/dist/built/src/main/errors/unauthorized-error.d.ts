import { HttpError } from './http-error';
declare class UnauthorizedError extends HttpError {
    static defaultMessage: string;
    constructor(message?: string | Error, orig?: Error);
}
export { UnauthorizedError };
