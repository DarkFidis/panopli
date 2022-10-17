"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('gateway timeout error unit tests', () => {
    let HttpError;
    let GatewayTimeoutError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ GatewayTimeoutError } = require('../../../main/errors/gateway-timeout-error'));
    });
    test('should return a GatewayTimeoutError instance', () => {
        const error = new GatewayTimeoutError();
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.GATEWAY_TIMEOUT, http_error_codes_1.ErrorStatusCode.GATEWAY_TIMEOUT, GatewayTimeoutError.defaultMessage, undefined, undefined);
    });
    test('should return a GatewayTimeoutError instance given message and orig', () => {
        const message = 'oops';
        const orig = new Error('oops');
        const extra = { foo: 'bar' };
        const error = new GatewayTimeoutError(message, orig, extra);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.GATEWAY_TIMEOUT, http_error_codes_1.ErrorStatusCode.GATEWAY_TIMEOUT, message, orig, extra);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheS10aW1lb3V0LWVycm9yLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L2Vycm9ycy9nYXRld2F5LXRpbWVvdXQtZXJyb3IudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRFQUFrRjtBQUdsRixRQUFRLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxFQUFFO0lBQ2hELElBQUksU0FBNkIsQ0FBQTtJQUNqQyxJQUFJLG1CQUErRCxDQUFBO0lBQ25FLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQzdDO1FBQUEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQzVEO1FBQUEsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLEdBQUcsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQTtJQUNwRixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyw4Q0FBOEMsRUFBRSxHQUFHLEVBQUU7UUFFeEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFBO1FBRXZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQ3BDLDRCQUFTLENBQUMsZUFBZSxFQUN6QixrQ0FBZSxDQUFDLGVBQWUsRUFDL0IsbUJBQW1CLENBQUMsY0FBYyxFQUNsQyxTQUFTLEVBQ1QsU0FBUyxDQUNWLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyxxRUFBcUUsRUFBRSxHQUFHLEVBQUU7UUFFL0UsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlCLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO1FBRTVCLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUUzRCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLGVBQWUsRUFDekIsa0NBQWUsQ0FBQyxlQUFlLEVBQy9CLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxDQUNOLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=