"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorStatusCode = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["GATEWAY_TIMEOUT"] = "GATEWAY_TIMEOUT";
    ErrorCode["IM_A_TEAPOT"] = "IM_A_TEAPOT";
    ErrorCode["INTERNAL"] = "INTERNAL";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["PLUGIN_EXECUTION"] = "PLUGIN_EXECUTION";
    ErrorCode["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    ErrorCode["TOO_MANY_REQUESTS"] = "TOO_MANY_REQUESTS";
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
})(ErrorCode || (ErrorCode = {}));
exports.ErrorCode = ErrorCode;
var ErrorStatusCode;
(function (ErrorStatusCode) {
    ErrorStatusCode[ErrorStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ErrorStatusCode[ErrorStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ErrorStatusCode[ErrorStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    ErrorStatusCode[ErrorStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    ErrorStatusCode[ErrorStatusCode["IM_A_TEAPOT"] = 418] = "IM_A_TEAPOT";
    ErrorStatusCode[ErrorStatusCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    ErrorStatusCode[ErrorStatusCode["INTERNAL"] = 500] = "INTERNAL";
    ErrorStatusCode[ErrorStatusCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    ErrorStatusCode[ErrorStatusCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
})(ErrorStatusCode || (ErrorStatusCode = {}));
exports.ErrorStatusCode = ErrorStatusCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci1jb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL2Vycm9ycy9odHRwLWVycm9yLWNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUssU0FjSjtBQWRELFdBQUssU0FBUztJQUdaLHdDQUEyQixDQUFBO0lBQzNCLG9DQUF1QixDQUFBO0lBQ3ZCLGdEQUFtQyxDQUFBO0lBQ25DLHdDQUEyQixDQUFBO0lBQzNCLGtDQUFxQixDQUFBO0lBQ3JCLG9DQUF1QixDQUFBO0lBRXZCLGtEQUFxQyxDQUFBO0lBQ3JDLHdEQUEyQyxDQUFBO0lBQzNDLG9EQUF1QyxDQUFBO0lBQ3ZDLDBDQUE2QixDQUFBO0FBQy9CLENBQUMsRUFkSSxTQUFTLEtBQVQsU0FBUyxRQWNiO0FBd0RRLDhCQUFTO0FBdERsQixJQUFLLGVBb0RKO0FBcERELFdBQUssZUFBZTtJQUNsQixxRUFBaUIsQ0FBQTtJQUNqQix1RUFBa0IsQ0FBQTtJQUVsQixpRUFBZSxDQUFBO0lBQ2YsaUVBQWUsQ0FBQTtJQWtCZixxRUFBaUIsQ0FBQTtJQVNqQixpRkFBdUIsQ0FBQTtJQUt2QiwrREFBYyxDQUFBO0lBS2QscUZBQXlCLENBQUE7SUFDekIsNkVBQXFCLENBQUE7QUFTdkIsQ0FBQyxFQXBESSxlQUFlLEtBQWYsZUFBZSxRQW9EbkI7QUFFbUIsMENBQWUifQ==