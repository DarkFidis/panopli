"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("jest-express/lib/request");
const response_1 = require("jest-express/lib/response");
describe('hello world middleware unit test', () => {
    let req;
    let res;
    let helloWorldMw;
    beforeAll(() => {
        req = new request_1.Request();
        res = new response_1.Response();
        ({ helloWorldMw } = require('../../../main/middlewares/hello-world'));
    });
    it('should respond with an object', () => {
        helloWorldMw(req, res);
        expect(res.json).toHaveBeenCalledWith({ hello: 'world' });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L3VuaXQvbWlkZGxld2FyZXMvaGVsbG8td29ybGQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNEQUFrRDtBQUNsRCx3REFBb0Q7QUFFcEQsUUFBUSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsRUFBRTtJQUNoRCxJQUFJLEdBQVksQ0FBQTtJQUNoQixJQUFJLEdBQWEsQ0FBQTtJQUNqQixJQUFJLFlBQVksQ0FBQTtJQUNoQixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsR0FBRyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFBO1FBQ25CLEdBQUcsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FDbkI7UUFBQSxDQUFDLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDLENBQUMsQ0FBQTtJQUNGLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxHQUFHLEVBQUU7UUFFdkMsWUFBWSxDQUFDLEdBQWdDLEVBQUUsR0FBaUMsQ0FBQyxDQUFBO1FBRWpGLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUMzRCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=