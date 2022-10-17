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
exports.HttpError = void 0;
const helper_1 = require("../utils/helper");
const custom_error_1 = require("./custom-error");
const http_error_codes_1 = require("./http-error-codes");
let HttpError = class HttpError extends custom_error_1.CustomError {
    constructor(code, statusCode, message, orig, extra) {
        super(message, orig);
        this._code = code;
        this._statusCode = statusCode;
        this._extra = extra;
    }
    get code() {
        return this._code;
    }
    get statusCode() {
        return this._statusCode;
    }
    get extra() {
        return this._extra;
    }
};
HttpError = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [String, Number, Object, Error, Object])
], HttpError);
exports.HttpError = HttpError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL2Vycm9ycy9odHRwLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLDRDQUFrRDtBQUNsRCxpREFBNEM7QUFDNUMseURBQThDO0FBRzlDLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBVSxTQUFRLDBCQUFXO0lBS2pDLFlBQ0UsSUFBZSxFQUNmLFVBQWtCLEVBQ2xCLE9BQXdCLEVBQ3hCLElBQVksRUFDWixLQUFlO1FBRWYsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQTtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQztDQUNGLENBQUE7QUE3QkssU0FBUztJQURkLElBQUEseUJBQWdCLEdBQXVCOzZEQVU3QixLQUFLO0dBVFYsU0FBUyxDQTZCZDtBQUVRLDhCQUFTIn0=