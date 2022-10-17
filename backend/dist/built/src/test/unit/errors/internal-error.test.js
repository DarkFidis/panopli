"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('internal error unit tests', () => {
    let HttpError;
    let InternalError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ InternalError } = require('../../../main/errors/internal-error'));
    });
    test('should return a InternalError instance', () => {
        const error = new InternalError();
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.INTERNAL, http_error_codes_1.ErrorStatusCode.INTERNAL, undefined, undefined);
    });
    test('should return a InternalError instance given message and orig', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const error = new InternalError(message, orig);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.INTERNAL, http_error_codes_1.ErrorStatusCode.INTERNAL, message, orig);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtZXJyb3IudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvZXJyb3JzL2ludGVybmFsLWVycm9yLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBa0Y7QUFHbEYsUUFBUSxDQUFDLDJCQUEyQixFQUFFLEdBQUcsRUFBRTtJQUN6QyxJQUFJLFNBQTZCLENBQUE7SUFDakMsSUFBSSxhQUFtRCxDQUFBO0lBQ3ZELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQzdDO1FBQUEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQzVEO1FBQUEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsd0NBQXdDLEVBQUUsR0FBRyxFQUFFO1FBRWxELE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUE7UUFFakMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsQ0FDcEMsNEJBQVMsQ0FBQyxRQUFRLEVBQ2xCLGtDQUFlLENBQUMsUUFBUSxFQUN4QixTQUFTLEVBQ1QsU0FBUyxDQUNWLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQywrREFBK0QsRUFBRSxHQUFHLEVBQUU7UUFFekUsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUU5QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLFFBQVEsRUFDbEIsa0NBQWUsQ0FBQyxRQUFRLEVBQ3hCLE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==