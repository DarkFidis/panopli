"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_error_codes_1 = require("../../../main/errors/http-error-codes");
describe('http error unit tests', () => {
    let CustomError;
    let HttpError;
    beforeAll(() => {
        jest.doMock('../../../main/errors/custom-error');
        ({ CustomError } = require('../../../main/errors/custom-error'));
        ({ HttpError } = require('../../../main/errors/http-error'));
    });
    test('should return a HttpError instance', () => {
        const code = http_error_codes_1.ErrorCode.INTERNAL;
        const statusCode = 599;
        const message = 'oops';
        const orig = new Error('oops');
        const extra = { foo: 'bar' };
        const error = new HttpError(code, statusCode, message, orig, extra);
        expect(error).toBeTruthy();
        expect(CustomError).toHaveBeenCalledWith(message, orig);
        expect(error.code).toEqual(code);
        expect(error.statusCode).toEqual(statusCode);
        expect(error.extra).toEqual(extra);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3Rlc3QvdW5pdC9lcnJvcnMvaHR0cC1lcnJvci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEVBQWlFO0FBR2pFLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUU7SUFDckMsSUFBSSxXQUErQixDQUFBO0lBQ25DLElBQUksU0FBMkMsQ0FBQTtJQUMvQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUMvQztRQUFBLENBQUMsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUNoRTtRQUFBLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtRQUU5QyxNQUFNLElBQUksR0FBYyw0QkFBUyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUE7UUFDdEIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlCLE1BQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFBO1FBRTVCLE1BQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVuRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=