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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let BadRequestError = class BadRequestError extends http_error_1.HttpError {
    constructor(message, orig) {
        super(http_error_codes_1.ErrorCode.BAD_REQUEST, http_error_codes_1.ErrorStatusCode.BAD_REQUEST, message, orig);
    }
};
BadRequestError = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error])
], BadRequestError);
exports.BadRequestError = BadRequestError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QtZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi9lcnJvcnMvYmFkLXJlcXVlc3QtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx5REFBK0Q7QUFHL0QsSUFBTSxlQUFlLEdBQXJCLE1BQU0sZUFBZ0IsU0FBUSxzQkFBUztJQUNyQyxZQUFZLE9BQXdCLEVBQUUsSUFBWTtRQUNoRCxLQUFLLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsa0NBQWUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzFFLENBQUM7Q0FDRixDQUFBO0FBSkssZUFBZTtJQURwQixJQUFBLHlCQUFnQixHQUE2Qjs2Q0FFQyxLQUFLO0dBRDlDLGVBQWUsQ0FJcEI7QUFFUSwwQ0FBZSJ9