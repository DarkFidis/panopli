"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('not found error unit tests', () => {
    let HttpError;
    let NotFoundError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ NotFoundError } = require('../../../main/errors/not-found-error'));
    });
    test('should return a NotFoundError instance', () => {
        const error = new NotFoundError();
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.NOT_FOUND, http_error_codes_1.ErrorStatusCode.NOT_FOUND, NotFoundError.defaultMessage, undefined, undefined);
    });
    test('should return a NotFoundError instance given message and orig', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const extra = { foo: 'bar' };
        const error = new NotFoundError(message, orig, extra);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.NOT_FOUND, http_error_codes_1.ErrorStatusCode.NOT_FOUND, message, orig, extra);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLWVycm9yLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L2Vycm9ycy9ub3QtZm91bmQtZXJyb3IudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRFQUFrRjtBQUdsRixRQUFRLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxFQUFFO0lBQzFDLElBQUksU0FBNkIsQ0FBQTtJQUNqQyxJQUFJLGFBQW1ELENBQUE7SUFDdkQsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FDN0M7UUFBQSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FDNUQ7UUFBQSxDQUFDLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7UUFFbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQTtRQUVqQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLFNBQVMsRUFDbkIsa0NBQWUsQ0FBQyxTQUFTLEVBQ3pCLGFBQWEsQ0FBQyxjQUFjLEVBQzVCLFNBQVMsRUFDVCxTQUFTLENBQ1YsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLCtEQUErRCxFQUFFLEdBQUcsRUFBRTtRQUV6RSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUE7UUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUIsTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUE7UUFFNUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVyRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLFNBQVMsRUFDbkIsa0NBQWUsQ0FBQyxTQUFTLEVBQ3pCLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=