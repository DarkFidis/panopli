"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const config_1 = require("./config");
const logger_1 = require("./utils/logger");
const log = new logger_1.Logger(config_1.log.name);
exports.log = log;
log.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21haW4vbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUEyQztBQUUzQywyQ0FBdUM7QUFFdkMsTUFBTSxHQUFHLEdBQWUsSUFBSSxlQUFNLENBQUMsWUFBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBSXpDLGtCQUFHO0FBRlosR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBIn0=