"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_helper_1 = require("./utils/client-helper");
const e2e_helper_1 = require("./utils/e2e-helper");
const e2e_server_1 = require("./utils/e2e-server");
describe('e2e tests', () => {
    beforeAll(() => e2e_server_1.e2eServer.start());
    afterAll(() => e2e_server_1.e2eServer.stop());
    describe('hello world', () => {
        test('should respond to GET /ping', async () => {
            const res = await (0, client_helper_1.client)('');
            (0, e2e_helper_1.expectResponse)(res, 200, { hello: 'world' });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L2UyZS9oZWxsby13b3JsZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEseURBQThDO0FBQzlDLG1EQUFtRDtBQUNuRCxtREFBOEM7QUFFOUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDekIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNsQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1FBQzNCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtZQUU3QyxNQUFNLEdBQUcsR0FBYSxNQUFNLElBQUEsc0JBQU0sRUFBQyxFQUFFLENBQUMsQ0FBQTtZQUV0QyxJQUFBLDJCQUFjLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9