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
var ForbiddenError_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenError = void 0;
const helper_1 = require("../utils/helper");
const http_error_1 = require("./http-error");
const http_error_codes_1 = require("./http-error-codes");
let ForbiddenError = ForbiddenError_1 = class ForbiddenError extends http_error_1.HttpError {
    constructor(message = ForbiddenError_1.defaultMessage, orig) {
        super(http_error_codes_1.ErrorCode.FORBIDDEN, http_error_codes_1.ErrorStatusCode.FORBIDDEN, message, orig);
    }
};
ForbiddenError.defaultMessage = 'You do not have the rights to perform this action';
ForbiddenError = ForbiddenError_1 = __decorate([
    (0, helper_1.staticImplements)(),
    __metadata("design:paramtypes", [Object, Error])
], ForbiddenError);
exports.ForbiddenError = ForbiddenError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yYmlkZGVuLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vZXJyb3JzL2ZvcmJpZGRlbi1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQWtEO0FBQ2xELDZDQUF3QztBQUN4Qyx5REFBK0Q7QUFHL0QsSUFBTSxjQUFjLHNCQUFwQixNQUFNLGNBQWUsU0FBUSxzQkFBUztJQUVwQyxZQUFZLFVBQTBCLGdCQUFjLENBQUMsY0FBYyxFQUFFLElBQVk7UUFDL0UsS0FBSyxDQUFDLDRCQUFTLENBQUMsU0FBUyxFQUFFLGtDQUFlLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0NBQ0YsQ0FBQTtBQUplLDZCQUFjLEdBQUcsbURBQW1ELENBQUE7QUFEOUUsY0FBYztJQURuQixJQUFBLHlCQUFnQixHQUE0Qjs2Q0FHaUMsS0FBSztHQUY3RSxjQUFjLENBS25CO0FBRVEsd0NBQWMifQ==