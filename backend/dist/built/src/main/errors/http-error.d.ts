import { HttpErrorable } from '../types/errors';
import { CustomError } from './custom-error';
import { ErrorCode } from './http-error-codes';
declare class HttpError extends CustomError implements HttpErrorable {
    protected _code: ErrorCode;
    protected _statusCode: number;
    protected _extra?: unknown;
    constructor(code: ErrorCode, statusCode: number, message?: string | Error, orig?: Error, extra?: unknown);
    get code(): ErrorCode;
    get statusCode(): number;
    get extra(): unknown;
}
export { HttpError };
