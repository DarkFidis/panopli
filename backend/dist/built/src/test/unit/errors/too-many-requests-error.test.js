"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('too many requests error unit tests', () => {
    let HttpError;
    let TooManyRequestsError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/http-error');
        ({ HttpError } = require('../../../main/errors/http-error'));
        ({ TooManyRequestsError } = require('../../../main/errors/too-many-requests-error'));
    });
    test('should return a TooManyRequestsError instance', () => {
        const quotaCount = 3;
        const quotaTime = 60;
        const error = new TooManyRequestsError(quotaCount, quotaTime);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.TOO_MANY_REQUESTS, http_error_codes_1.ErrorStatusCode.TOO_MANY_REQUESTS, 'max quota reached (3 calls per 60s)', undefined, undefined);
    });
    test('should return a TooManyRequestsError instance given message and orig', () => {
        const quotaCount = 3;
        const quotaTime = 60;
        const extra = { foo: 'bar' };
        const error = new TooManyRequestsError(quotaCount, quotaTime, extra);
        expect(error).toBeTruthy();
        expect(HttpError).toHaveBeenCalledWith(http_error_codes_1.ErrorCode.TOO_MANY_REQUESTS, http_error_codes_1.ErrorStatusCode.TOO_MANY_REQUESTS, 'max quota reached (3 calls per 60s)', undefined, extra);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vLW1hbnktcmVxdWVzdHMtZXJyb3IudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvZXJyb3JzL3Rvby1tYW55LXJlcXVlc3RzLWVycm9yLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0RUFBa0Y7QUFHbEYsUUFBUSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtJQUNsRCxJQUFJLFNBQTZCLENBQUE7SUFDakMsSUFBSSxvQkFBaUUsQ0FBQTtJQUNyRSxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUM3QztRQUFBLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUM1RDtRQUFBLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLE9BQU8sQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUE7SUFDdkYsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsK0NBQStDLEVBQUUsR0FBRyxFQUFFO1FBRXpELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQTtRQUNwQixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFFcEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFFN0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsQ0FDcEMsNEJBQVMsQ0FBQyxpQkFBaUIsRUFDM0Isa0NBQWUsQ0FBQyxpQkFBaUIsRUFDakMscUNBQXFDLEVBQ3JDLFNBQVMsRUFDVCxTQUFTLENBQ1YsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLHNFQUFzRSxFQUFFLEdBQUcsRUFBRTtRQUVoRixNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUE7UUFDcEIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO1FBRTVCLE1BQU0sS0FBSyxHQUFHLElBQUksb0JBQW9CLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVwRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUNwQyw0QkFBUyxDQUFDLGlCQUFpQixFQUMzQixrQ0FBZSxDQUFDLGlCQUFpQixFQUNqQyxxQ0FBcUMsRUFDckMsU0FBUyxFQUNULEtBQUssQ0FDTixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9