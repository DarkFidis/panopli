"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('forbidden error unit tests', () => {
    let HttpError;
    let ForbiddenError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ ForbiddenError } = require('../../../main/errors/forbidden-error'));
    });
    test('should return a ForbiddenError instance', () => {
        const error = new ForbiddenError();
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.FORBIDDEN, http_error_codes_1.ErrorStatusCode.FORBIDDEN, ForbiddenError.defaultMessage, undefined);
    });
    test('should return a ForbiddenError instance given message and orig', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const error = new ForbiddenError(message, orig);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.FORBIDDEN, http_error_codes_1.ErrorStatusCode.FORBIDDEN, message, orig);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yYmlkZGVuLWVycm9yLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L2Vycm9ycy9mb3JiaWRkZW4tZXJyb3IudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRFQUFrRjtBQUdsRixRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBQzFDLElBQUksU0FBNkIsQ0FBQTtJQUNqQyxJQUFJLGNBQXFELENBQUE7SUFDekQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FDN0M7UUFBQSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FDNUQ7UUFBQSxDQUFDLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7UUFFbkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQTtRQUVsQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLFNBQVMsRUFDbkIsa0NBQWUsQ0FBQyxTQUFTLEVBQ3pCLGNBQWMsQ0FBQyxjQUFjLEVBQzdCLFNBQVMsQ0FDVixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsZ0VBQWdFLEVBQUUsR0FBRyxFQUFFO1FBRTFFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUU5QixNQUFNLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsQ0FDcEMsNEJBQVMsQ0FBQyxTQUFTLEVBQ25CLGtDQUFlLENBQUMsU0FBUyxFQUN6QixPQUFPLEVBQ1AsSUFBSSxDQUNMLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=