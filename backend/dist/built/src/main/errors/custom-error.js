"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, orig) {
        const args = CustomError.handleArgs(message, orig);
        super(args.message);
        this._orig = args.orig;
        const actualProto = new.target.prototype;
        Object.setPrototypeOf(this, actualProto);
    }
    static handleArgs(message, orig) {
        const args = {};
        if (message instanceof Error) {
            args.orig = message;
            args.message = args.orig.message;
        }
        else {
            args.orig = orig;
            args.message = message;
        }
        return args;
    }
    get orig() {
        return this._orig;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vZXJyb3JzL2N1c3RvbS1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLFdBQVksU0FBUSxLQUFLO0lBd0I3QixZQUFZLE9BQXdCLEVBQUUsSUFBWTtRQUNoRCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUN0QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBN0JTLE1BQU0sQ0FBQyxVQUFVLENBQ3pCLE9BQXdCLEVBQ3hCLElBQVk7UUFLWixNQUFNLElBQUksR0FHTixFQUFFLENBQUE7UUFDTixJQUFJLE9BQU8sWUFBWSxLQUFLLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7U0FDdkI7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFZRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztDQUNGO0FBRVEsa0NBQVcifQ==