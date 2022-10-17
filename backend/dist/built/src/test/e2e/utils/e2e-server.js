"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e2eServer = void 0;
const log_1 = require("../../../main/log");
const worker = require("../../../main/worker");
const clientHelper = require("./client-helper");
exports.e2eServer = {
    start: async () => {
        exports.e2eServer.processExitMock = jest.spyOn(process, 'exit').mockImplementation();
        await worker.run();
        clientHelper.init();
        log_1.log.debug('using base URL :', clientHelper.baseUrl);
    },
    stop: async () => {
        await worker.shutdown();
        expect(exports.e2eServer.processExitMock).toHaveBeenNthCalledWith(1, 1);
        if (exports.e2eServer.processExitMock) {
            exports.e2eServer.processExitMock.mockRestore();
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLXNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L2UyZS91dGlscy9lMmUtc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1QztBQUN2QywrQ0FBOEM7QUFFOUMsZ0RBQStDO0FBRWxDLFFBQUEsU0FBUyxHQUFjO0lBQ2xDLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRTtRQUNoQixpQkFBUyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQzVFLE1BQU0sTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNuQixTQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBQ0QsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2YsTUFBTSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDdkIsTUFBTSxDQUFDLGlCQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQy9ELElBQUksaUJBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDN0IsaUJBQVMsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDeEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQSJ9