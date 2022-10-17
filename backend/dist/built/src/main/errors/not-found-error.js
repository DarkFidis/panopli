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
var NotFoundError_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let NotFoundError = NotFoundError_1 = class NotFoundError extends http_error_1.HttpError {
    constructor(message = NotFoundError_1.defaultMessage, orig, extra) {
        super(http_error_codes_1.ErrorCode.NOT_FOUND, http_error_codes_1.ErrorStatusCode.NOT_FOUND, message, orig, extra);
    }
};
NotFoundError.defaultMessage = 'Resource not found';
NotFoundError = NotFoundError_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error, Object])
], NotFoundError);
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vZXJyb3JzL25vdC1mb3VuZC1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx5REFBK0Q7QUFHL0QsSUFBTSxhQUFhLHFCQUFuQixNQUFNLGFBQWMsU0FBUSxzQkFBUztJQUVuQyxZQUNFLFVBQTBCLGVBQWEsQ0FBQyxjQUFjLEVBQ3RELElBQVksRUFDWixLQUFlO1FBRWYsS0FBSyxDQUFDLDRCQUFTLENBQUMsU0FBUyxFQUFFLGtDQUFlLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDN0UsQ0FBQztDQUNGLENBQUE7QUFSZSw0QkFBYyxHQUFHLG9CQUFvQixDQUFBO0FBRC9DLGFBQWE7SUFEbEIsSUFBQSx5QkFBZ0IsR0FBMkI7NkNBS2pDLEtBQUs7R0FKVixhQUFhLENBU2xCO0FBRVEsc0NBQWEifQ==