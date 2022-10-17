"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.cluster = void 0;
const nodeConfig = require("config");
exports.cluster = nodeConfig.has('cluster')
    ? nodeConfig.get('cluster')
    : { workers: 0 };
exports.log = nodeConfig.has('log')
    ? nodeConfig.get('log')
    : { name: 'Express-template' };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21haW4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFvQztBQUl2QixRQUFBLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBb0IsU0FBUyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQTtBQUVMLFFBQUEsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFnQixLQUFLLENBQUM7SUFDdEMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUEifQ==