"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCaller = void 0;
const path_1 = require("path");
const stackback = require("stackback");
const getCaller = (baseDir, pos = 0) => {
    const e = new Error();
    const stack = stackback(e);
    const index = Math.min(stack.length - 1, pos + 1);
    const s = stack[index];
    return {
        file: s && (0, path_1.relative)(baseDir, s.getFileName()),
        line: s && s.getLineNumber(),
    };
};
exports.getCaller = getCaller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vdXRpbHMvY2FsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUMvQix1Q0FBc0M7QUFJdEMsTUFBTSxTQUFTLEdBQWMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFO0lBQ2hELE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUE7SUFDckIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ2pELE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QixPQUFPO1FBS0wsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFBLGVBQVEsRUFBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRTtLQUM3QixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVEsOEJBQVMifQ==