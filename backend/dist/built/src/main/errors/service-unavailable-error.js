"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ServiceUnavailableError_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUnavailableError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let ServiceUnavailableError = ServiceUnavailableError_1 = class ServiceUnavailableError extends http_error_1.HttpError {
    constructor(message = ServiceUnavailableError_1.defaultMessage, orig, extra) {
        super(http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE, http_error_codes_1.ErrorStatusCode.SERVICE_UNAVAILABLE, message, orig, extra);
    }
};
ServiceUnavailableError.defaultMessage = 'The service is currently unavailable';
ServiceUnavailableError = ServiceUnavailableError_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error, Object])
], ServiceUnavailableError);
exports.ServiceUnavailableError = ServiceUnavailableError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS11bmF2YWlsYWJsZS1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL2Vycm9ycy9zZXJ2aWNlLXVuYXZhaWxhYmxlLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDLHlEQUErRDtBQUcvRCxJQUFNLHVCQUF1QiwrQkFBN0IsTUFBTSx1QkFBd0IsU0FBUSxzQkFBUztJQUU3QyxZQUNFLFVBQTBCLHlCQUF1QixDQUFDLGNBQWMsRUFDaEUsSUFBWSxFQUNaLEtBQWU7UUFFZixLQUFLLENBQUMsNEJBQVMsQ0FBQyxtQkFBbUIsRUFBRSxrQ0FBZSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDakcsQ0FBQztDQUNGLENBQUE7QUFSZSxzQ0FBYyxHQUFHLHNDQUFzQyxDQUFBO0FBRGpFLHVCQUF1QjtJQUQ1QixJQUFBLHlCQUFnQixHQUFxQzs2Q0FLM0MsS0FBSztHQUpWLHVCQUF1QixDQVM1QjtBQUVRLDBEQUF1QiJ9