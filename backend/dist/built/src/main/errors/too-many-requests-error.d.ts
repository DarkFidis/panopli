import { HttpError } from './http-error';
declare class TooManyRequestsError extends HttpError {
    constructor(quotaCount: number, quotaTime: number, extra?: unknown);
}
export { TooManyRequestsError };
