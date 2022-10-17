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
exports.InternalError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let InternalError = class InternalError extends http_error_1.HttpError {
    constructor(message, orig) {
        super(http_error_codes_1.ErrorCode.INTERNAL, http_error_codes_1.ErrorStatusCode.INTERNAL, message, orig);
    }
};
InternalError = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error])
], InternalError);
exports.InternalError = InternalError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi9lcnJvcnMvaW50ZXJuYWwtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx5REFBK0Q7QUFHL0QsSUFBTSxhQUFhLEdBQW5CLE1BQU0sYUFBYyxTQUFRLHNCQUFTO0lBQ25DLFlBQVksT0FBd0IsRUFBRSxJQUFZO1FBQ2hELEtBQUssQ0FBQyw0QkFBUyxDQUFDLFFBQVEsRUFBRSxrQ0FBZSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDcEUsQ0FBQztDQUNGLENBQUE7QUFKSyxhQUFhO0lBRGxCLElBQUEseUJBQWdCLEdBQTJCOzZDQUVHLEtBQUs7R0FEOUMsYUFBYSxDQUlsQjtBQUVRLHNDQUFhIn0=