"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_helper_1 = require("./utils/client-helper");
const e2e_helper_1 = require("./utils/e2e-helper");
const e2e_server_1 = require("./utils/e2e-server");
describe('e2e tests', () => {
    beforeAll(() => e2e_server_1.e2eServer.start());
    afterAll(() => e2e_server_1.e2eServer.stop());
    describe('ping', () => {
        test('should respond to GET /ping', async () => {
            const res = await (0, client_helper_1.client)('ping');
            (0, e2e_helper_1.expectResponse)(res, 204, null);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3Rlc3QvZTJlL3BpbmcudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlEQUE4QztBQUM5QyxtREFBbUQ7QUFDbkQsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDbEMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUNoQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNwQixJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFFN0MsTUFBTSxHQUFHLEdBQWEsTUFBTSxJQUFBLHNCQUFNLEVBQUMsTUFBTSxDQUFDLENBQUE7WUFFMUMsSUFBQSwyQkFBYyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=