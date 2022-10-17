"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('unauthorized error unit tests', () => {
    let HttpError;
    let UnauthorizedError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ UnauthorizedError } = require('../../../main/errors/unauthorized-error'));
    });
    test('should return a UnauthorizedError instance', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const error = new UnauthorizedError(message, orig);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.UNAUTHORIZED, http_error_codes_1.ErrorStatusCode.UNAUTHORIZED, message, orig);
    });
    test('should return a UnauthorizedError instance without message', () => {
        const orig = new Error('oops');
        const error = new UnauthorizedError(undefined, orig);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.UNAUTHORIZED, http_error_codes_1.ErrorStatusCode.UNAUTHORIZED, 'This action requires an authorization', orig);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRob3JpemVkLWVycm9yLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L2Vycm9ycy91bmF1dGhvcml6ZWQtZXJyb3IudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRFQUFrRjtBQUdsRixRQUFRLENBQUMsK0JBQStCLEVBQUUsR0FBRyxFQUFFO0lBQzdDLElBQUksU0FBNkIsQ0FBQTtJQUNqQyxJQUFJLGlCQUEyRCxDQUFBO0lBQy9ELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQzdDO1FBQUEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQzVEO1FBQUEsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQTtJQUMvRSxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLEVBQUU7UUFFdEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksaUJBQWlCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRWxELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQ3BDLDRCQUFTLENBQUMsWUFBWSxFQUN0QixrQ0FBZSxDQUFDLFlBQVksRUFDNUIsT0FBTyxFQUNQLElBQUksQ0FDTCxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsNERBQTRELEVBQUUsR0FBRyxFQUFFO1FBRXRFLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksaUJBQWlCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXBELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQ3BDLDRCQUFTLENBQUMsWUFBWSxFQUN0QixrQ0FBZSxDQUFDLFlBQVksRUFDNUIsdUNBQXVDLEVBQ3ZDLElBQUksQ0FDTCxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9