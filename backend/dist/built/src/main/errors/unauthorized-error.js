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
var UnauthorizedError_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let UnauthorizedError = UnauthorizedError_1 = class UnauthorizedError extends http_error_1.HttpError {
    constructor(message = UnauthorizedError_1.defaultMessage, orig) {
        super(http_error_codes_1.ErrorCode.UNAUTHORIZED, http_error_codes_1.ErrorStatusCode.UNAUTHORIZED, message, orig);
    }
};
UnauthorizedError.defaultMessage = 'This action requires an authorization';
UnauthorizedError = UnauthorizedError_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error])
], UnauthorizedError);
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vZXJyb3JzL3VuYXV0aG9yaXplZC1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx5REFBK0Q7QUFHL0QsSUFBTSxpQkFBaUIseUJBQXZCLE1BQU0saUJBQWtCLFNBQVEsc0JBQVM7SUFFdkMsWUFBWSxVQUEwQixtQkFBaUIsQ0FBQyxjQUFjLEVBQUUsSUFBWTtRQUNsRixLQUFLLENBQUMsNEJBQVMsQ0FBQyxZQUFZLEVBQUUsa0NBQWUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVFLENBQUM7Q0FDRixDQUFBO0FBSmUsZ0NBQWMsR0FBRyx1Q0FBdUMsQ0FBQTtBQURsRSxpQkFBaUI7SUFEdEIsSUFBQSx5QkFBZ0IsR0FBK0I7NkNBR2lDLEtBQUs7R0FGaEYsaUJBQWlCLENBS3RCO0FBRVEsOENBQWlCIn0=