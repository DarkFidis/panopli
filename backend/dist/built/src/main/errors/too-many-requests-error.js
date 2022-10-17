"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooManyRequestsError = void 0;
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
class TooManyRequestsError extends http_error_1.HttpError {
    constructor(quotaCount, quotaTime, extra) {
        const message = `max quota reached (${quotaCount} calls per ${quotaTime}s)`;
        super(http_error_codes_1.ErrorCode.TOO_MANY_REQUESTS, http_error_codes_1.ErrorStatusCode.TOO_MANY_REQUESTS, message, undefined, extra);
    }
}
exports.TooManyRequestsError = TooManyRequestsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vLW1hbnktcmVxdWVzdHMtZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi9lcnJvcnMvdG9vLW1hbnktcmVxdWVzdHMtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXdDO0FBQ3hDLHlEQUErRDtBQUUvRCxNQUFNLG9CQUFxQixTQUFRLHNCQUFTO0lBQzFDLFlBQVksVUFBa0IsRUFBRSxTQUFpQixFQUFFLEtBQWU7UUFDaEUsTUFBTSxPQUFPLEdBQUcsc0JBQXNCLFVBQVUsY0FBYyxTQUFTLElBQUksQ0FBQTtRQUMzRSxLQUFLLENBQUMsNEJBQVMsQ0FBQyxpQkFBaUIsRUFBRSxrQ0FBZSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDbEcsQ0FBQztDQUNGO0FBRVEsb0RBQW9CIn0=