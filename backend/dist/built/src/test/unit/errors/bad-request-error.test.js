"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('bad request error unit tests', () => {
    let HttpError;
    let BadRequestError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ BadRequestError } = require('../../../main/errors/bad-request-error'));
    });
    test('should return a BadRequestError instance', () => {
        const error = new BadRequestError();
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.BAD_REQUEST, http_error_codes_1.ErrorStatusCode.BAD_REQUEST, undefined, undefined);
    });
    test('should return a BadRequestError instance given message and orig', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const error = new BadRequestError(message, orig);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.BAD_REQUEST, http_error_codes_1.ErrorStatusCode.BAD_REQUEST, message, orig);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLXJlcXVlc3QtZXJyb3IudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvZXJyb3JzL2JhZC1yZXF1ZXN0LWVycm9yLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBa0Y7QUFHbEYsUUFBUSxDQUFDLDhCQUE4QixFQUFFLEdBQUcsRUFBRTtJQUM1QyxJQUFJLFNBQTZCLENBQUE7SUFDakMsSUFBSSxlQUF1RCxDQUFBO0lBQzNELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQzdDO1FBQUEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQzVEO1FBQUEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxHQUFHLE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUE7SUFDNUUsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsMENBQTBDLEVBQUUsR0FBRyxFQUFFO1FBRXBELE1BQU0sS0FBSyxHQUFHLElBQUksZUFBZSxFQUFFLENBQUE7UUFFbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsQ0FDcEMsNEJBQVMsQ0FBQyxXQUFXLEVBQ3JCLGtDQUFlLENBQUMsV0FBVyxFQUMzQixTQUFTLEVBQ1QsU0FBUyxDQUNWLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyxpRUFBaUUsRUFBRSxHQUFHLEVBQUU7UUFFM0UsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVoRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLFdBQVcsRUFDckIsa0NBQWUsQ0FBQyxXQUFXLEVBQzNCLE9BQU8sRUFDUCxJQUFJLENBQ0wsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==