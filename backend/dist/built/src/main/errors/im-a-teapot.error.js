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
var TeapotError_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeapotError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let TeapotError = TeapotError_1 = class TeapotError extends http_error_1.HttpError {
    constructor(message = TeapotError_1.defaultMessage, orig) {
        super(http_error_codes_1.ErrorCode.IM_A_TEAPOT, http_error_codes_1.ErrorStatusCode.IM_A_TEAPOT, message, orig);
    }
};
TeapotError.defaultMessage = 'What do you think I am ?';
TeapotError = TeapotError_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error])
], TeapotError);
exports.TeapotError = TeapotError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW0tYS10ZWFwb3QuZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi9lcnJvcnMvaW0tYS10ZWFwb3QuZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLDRDQUFrRDtBQUNsRCw2Q0FBd0M7QUFDeEMseURBQStEO0FBRy9ELElBQU0sV0FBVyxtQkFBakIsTUFBTSxXQUFZLFNBQVEsc0JBQVM7SUFFakMsWUFBWSxVQUEwQixhQUFXLENBQUMsY0FBYyxFQUFFLElBQVk7UUFDNUUsS0FBSyxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLGtDQUFlLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0NBQ0YsQ0FBQTtBQUplLDBCQUFjLEdBQUcsMEJBQTBCLENBQUE7QUFEckQsV0FBVztJQURoQixJQUFBLHlCQUFnQixHQUF5Qjs2Q0FHaUMsS0FBSztHQUYxRSxXQUFXLENBS2hCO0FBRVEsa0NBQVcifQ==