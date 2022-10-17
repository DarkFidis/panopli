"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const not_found_error_1 = require("../errors/not-found-error");
const notFound = (__, res) => {
    if (res.headersSent) {
        return;
    }
    throw new not_found_error_1.NotFoundError();
};
exports.notFound = notFound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vbWlkZGxld2FyZXMvbm90LWZvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLCtEQUF5RDtBQUV6RCxNQUFNLFFBQVEsR0FBbUIsQ0FBQyxFQUFXLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDOUQsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFO1FBQ25CLE9BQU07S0FDUDtJQUNELE1BQU0sSUFBSSwrQkFBYSxFQUFFLENBQUE7QUFDM0IsQ0FBQyxDQUFBO0FBRVEsNEJBQVEifQ==