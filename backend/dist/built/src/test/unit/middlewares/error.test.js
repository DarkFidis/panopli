"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("jest-express/lib/request");
const response_1 = require("jest-express/lib/response");
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('format error middleware unit test', () => {
    let errorMw;
    let req;
    let res;
    let next;
    beforeAll(() => {
        ;
        ({ errorMw } = require('../../../main/middlewares/error'));
        req = new request_1.Request();
        res = new response_1.Response();
        next = jest.fn();
    });
    beforeEach(() => {
        res.setHeadersSent(false);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    test('should not respond if response are already sent', () => {
        res.setHeadersSent(true);
        const error = new Error('Oops');
        errorMw(error, req, res, next);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
    test('should respond an error with a code', () => {
        const error = new Error('Oops');
        error.code = http_error_codes_1.ErrorCode.NOT_FOUND;
        errorMw(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ code: http_error_codes_1.ErrorCode.NOT_FOUND, message: error.message });
    });
    test('should respond an error with a status code', () => {
        const error = new Error('Oops');
        const statusCode = 404;
        error.statusCode = statusCode;
        errorMw(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(statusCode);
        expect(res.json).toHaveBeenCalledWith({
            code: http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE,
            message: error.message,
        });
    });
    test('should respond an error with an extra', () => {
        const error = new Error('Oops');
        const extra = { foo: 'bar' };
        error.extra = extra;
        errorMw(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            code: http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE,
            message: error.message,
            ...extra,
        });
    });
    test('should respond an error without message', () => {
        const error = new Error();
        errorMw(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            code: http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE,
            message: 'Service unavailable',
        });
    });
    test('should respond an error with an orig', () => {
        const error = new Error('oops');
        error.orig = new Error('original error');
        errorMw(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            code: http_error_codes_1.ErrorCode.SERVICE_UNAVAILABLE,
            errors: [error.orig.toString()],
            message: error.message,
        });
    });
    test('should respond an error with details given an origin error provides multiple errors', () => {
        const error = new Error('oops');
        error.orig = new Error('original error');
        error.orig.errors = ['first error', 'second error'];
        errorMw(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            code: 'SERVICE_UNAVAILABLE',
            errors: ['first error', 'second error'],
            message: 'oops',
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvbWlkZGxld2FyZXMvZXJyb3IudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLHNEQUFrRDtBQUNsRCx3REFBb0Q7QUFFcEQsNEVBQWlFO0FBR2pFLFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFHLEVBQUU7SUFDakQsSUFBSSxPQUE0QixDQUFBO0lBQ2hDLElBQUksR0FBWSxDQUFBO0lBQ2hCLElBQUksR0FBYSxDQUFBO0lBQ2pCLElBQUksSUFBZSxDQUFBO0lBRW5CLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFFYixDQUFDO1FBQUEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDM0QsR0FBRyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFBO1FBQ25CLEdBQUcsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO0lBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyxpREFBaUQsRUFBRSxHQUFHLEVBQUU7UUFFM0QsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QixNQUFNLEtBQUssR0FBYyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQWdDLEVBQUUsR0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO1FBRS9DLE1BQU0sS0FBSyxHQUFjLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsNEJBQVMsQ0FBQyxTQUFTLENBQUE7UUFFaEMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFnQyxFQUFFLEdBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFekYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxFQUFFLDRCQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUM5RixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxHQUFHLEVBQUU7UUFFdEQsTUFBTSxLQUFLLEdBQWMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFBO1FBQ3RCLEtBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1FBRTdCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBZ0MsRUFBRSxHQUFpQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXpGLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztZQUNwQyxJQUFJLEVBQUUsNEJBQVMsQ0FBQyxtQkFBbUI7WUFDbkMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsRUFBRTtRQUVqRCxNQUFNLEtBQUssR0FBYyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxNQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQTtRQUM1QixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUVuQixPQUFPLENBQUMsS0FBSyxFQUFFLEdBQWdDLEVBQUUsR0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsSUFBSSxFQUFFLDRCQUFTLENBQUMsbUJBQW1CO1lBQ25DLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixHQUFHLEtBQUs7U0FDVCxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtJQUNGLElBQUksQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLEVBQUU7UUFFbkQsTUFBTSxLQUFLLEdBQWMsSUFBSSxLQUFLLEVBQUUsQ0FBQTtRQUVwQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQWdDLEVBQUUsR0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsSUFBSSxFQUFFLDRCQUFTLENBQUMsbUJBQW1CO1lBQ25DLE9BQU8sRUFBRSxxQkFBcUI7U0FDL0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFJLENBQUMsc0NBQXNDLEVBQUUsR0FBRyxFQUFFO1FBRWhELE1BQU0sS0FBSyxHQUFjLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUV4QyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQWdDLEVBQUUsR0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUV6RixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsSUFBSSxFQUFFLDRCQUFTLENBQUMsbUJBQW1CO1lBQ25DLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3ZCLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLHFGQUFxRixFQUFFLEdBQUcsRUFBRTtRQUUvRixNQUFNLEtBQUssR0FBYyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMxQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUE7UUFFbkQsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFnQyxFQUFFLEdBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFekYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDO1lBQ3BDLElBQUksRUFBRSxxQkFBcUI7WUFDM0IsTUFBTSxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztZQUN2QyxPQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=