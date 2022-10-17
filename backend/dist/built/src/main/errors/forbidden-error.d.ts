import { HttpError } from './http-error';
declare class ForbiddenError extends HttpError {
    static defaultMessage: string;
    constructor(message?: string | Error, orig?: Error);
}
export { ForbiddenError };
