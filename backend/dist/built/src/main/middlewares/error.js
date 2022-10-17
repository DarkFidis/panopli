"use strict";
const error = {
    defaultCode: 'SERVICE_UNAVAILABLE',
    defaultMessage: 'Service unavailable',
    errorMw: (err, __, res) => {
        var _a;
        if (res.headersSent) {
            return;
        }
        const data = {
            code: err.code || error.defaultCode,
            message: err.message || error.defaultMessage,
        };
        if ((_a = err.orig) === null || _a === void 0 ? void 0 : _a.errors) {
            data.errors = err.orig.errors;
        }
        else if (err.orig) {
            data.errors = [err.orig.toString()];
        }
        if (err.extra) {
            Object.assign(data, err.extra);
        }
        const statusCode = err.statusCode || 500;
        res.status(statusCode);
        res.json(data);
    },
};
module.exports = error;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi9taWRkbGV3YXJlcy9lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsTUFBTSxLQUFLLEdBQVk7SUFDckIsV0FBVyxFQUFFLHFCQUFxQjtJQUNsQyxjQUFjLEVBQUUscUJBQXFCO0lBQ3JDLE9BQU8sRUFBRSxDQUFDLEdBQWMsRUFBRSxFQUFXLEVBQUUsR0FBYSxFQUFRLEVBQUU7O1FBQzVELElBQUksR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFNO1NBQ1A7UUFDRCxNQUFNLElBQUksR0FBYztZQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsY0FBYztTQUM3QyxDQUFBO1FBQ0QsSUFBSSxNQUFBLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1NBQzlCO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDcEM7UUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDL0I7UUFDRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQTtRQUN4QyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEIsQ0FBQztDQUNGLENBQUE7QUFFRCxpQkFBUyxLQUFLLENBQUEifQ==