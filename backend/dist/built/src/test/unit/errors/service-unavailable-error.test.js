"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('service unavailable error unit tests', () => {
    let HttpError;
    let ServiceUnavailableError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ ServiceUnavailableError } = require('../../../main/errors/service-unavailable-error'));
    });
    test('should return a ServiceUnavailableError instance', () => {
        const error = new ServiceUnavailableError();
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE, http_error_codes_1.ErrorStatusCode.SERVICE_UNAVAILABLE, ServiceUnavailableError.defaultMessage, undefined, undefined);
    });
    test('should return a ServiceUnavailableError instance given message and orig', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const extra = { foo: 'bar' };
        const error = new ServiceUnavailableError(message, orig, extra);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE, http_error_codes_1.ErrorStatusCode.SERVICE_UNAVAILABLE, message, orig, extra);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS11bmF2YWlsYWJsZS1lcnJvci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3Rlc3QvdW5pdC9lcnJvcnMvc2VydmljZS11bmF2YWlsYWJsZS1lcnJvci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQWtGO0FBR2xGLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLEVBQUU7SUFDcEQsSUFBSSxTQUE2QixDQUFBO0lBQ2pDLElBQUksdUJBQXVFLENBQUE7SUFDM0UsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FDN0M7UUFBQSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FDNUQ7UUFBQSxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxPQUFPLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFBO0lBQzVGLENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLGtEQUFrRCxFQUFFLEdBQUcsRUFBRTtRQUU1RCxNQUFNLEtBQUssR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUE7UUFFM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsQ0FDcEMsNEJBQVMsQ0FBQyxtQkFBbUIsRUFDN0Isa0NBQWUsQ0FBQyxtQkFBbUIsRUFDbkMsdUJBQXVCLENBQUMsY0FBYyxFQUN0QyxTQUFTLEVBQ1QsU0FBUyxDQUNWLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyx5RUFBeUUsRUFBRSxHQUFHLEVBQUU7UUFFbkYsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlCLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO1FBRTVCLE1BQU0sS0FBSyxHQUFHLElBQUksdUJBQXVCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUUvRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLG1CQUFtQixFQUM3QixrQ0FBZSxDQUFDLG1CQUFtQixFQUNuQyxPQUFPLEVBQ1AsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9