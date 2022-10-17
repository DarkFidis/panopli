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
var GatewayTimeoutError_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayTimeoutError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let GatewayTimeoutError = GatewayTimeoutError_1 = class GatewayTimeoutError extends http_error_1.HttpError {
    constructor(message = GatewayTimeoutError_1.defaultMessage, orig, extra) {
        super(http_error_codes_1.ErrorCode.GATEWAY_TIMEOUT, http_error_codes_1.ErrorStatusCode.GATEWAY_TIMEOUT, message, orig, extra);
    }
};
GatewayTimeoutError.defaultMessage = 'Service did not respond in time';
GatewayTimeoutError = GatewayTimeoutError_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error, Object])
], GatewayTimeoutError);
exports.GatewayTimeoutError = GatewayTimeoutError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheS10aW1lb3V0LWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vZXJyb3JzL2dhdGV3YXktdGltZW91dC1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx5REFBK0Q7QUFHL0QsSUFBTSxtQkFBbUIsMkJBQXpCLE1BQU0sbUJBQW9CLFNBQVEsc0JBQVM7SUFFekMsWUFDRSxVQUEwQixxQkFBbUIsQ0FBQyxjQUFjLEVBQzVELElBQVksRUFDWixLQUFlO1FBRWYsS0FBSyxDQUFDLDRCQUFTLENBQUMsZUFBZSxFQUFFLGtDQUFlLENBQUMsZUFBZSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDekYsQ0FBQztDQUNGLENBQUE7QUFSd0Isa0NBQWMsR0FBRyxpQ0FBaUMsQ0FBQTtBQURyRSxtQkFBbUI7SUFEeEIsSUFBQSx5QkFBZ0IsR0FBaUM7NkNBS3ZDLEtBQUs7R0FKVixtQkFBbUIsQ0FTeEI7QUFFUSxrREFBbUIifQ==