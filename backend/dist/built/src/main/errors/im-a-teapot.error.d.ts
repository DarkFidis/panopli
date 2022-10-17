import { HttpError } from './http-error';
declare class TeapotError extends HttpError {
    static defaultMessage: string;
    constructor(message?: string | Error, orig?: Error);
}
export { TeapotError };
