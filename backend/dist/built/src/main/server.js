"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webServer = void 0;
const log_1 = require("./log");
const router_1 = require("./router");
const web_server_1 = require("./services/web-server");
const webServer = new web_server_1.WebServer(log_1.log, router_1.registerApp);
exports.webServer = webServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21haW4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUEyQjtBQUMzQixxQ0FBc0M7QUFDdEMsc0RBQWlEO0FBR2pELE1BQU0sU0FBUyxHQUFrQixJQUFJLHNCQUFTLENBQUMsU0FBRyxFQUFFLG9CQUFXLENBQUMsQ0FBQTtBQUV2RCw4QkFBUyJ9