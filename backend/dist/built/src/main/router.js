"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerApp = void 0;
const body_parser_1 = require("body-parser");
const cookieParserFactory = require("cookie-parser");
const hello_world_1 = require("./middlewares/hello-world");
const helper_1 = require("./utils/helper");
const jsonBodyParserMw = (0, body_parser_1.json)();
const urlencodedBodyParserMw = (0, body_parser_1.urlencoded)({ extended: false });
const rawBodyParserMw = (0, body_parser_1.raw)({ limit: '10mb', type: '*/*' });
const cookieParserMw = cookieParserFactory();
const registerApp = (app) => {
    app.use(cookieParserMw, jsonBodyParserMw, urlencodedBodyParserMw, rawBodyParserMw);
    app.get('/', (0, helper_1.toExpressMw)(hello_world_1.helloWorldMw));
};
exports.registerApp = registerApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21haW4vcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUlvQjtBQUNwQixxREFBb0Q7QUFFcEQsMkRBQXdEO0FBRXhELDJDQUE0QztBQUU1QyxNQUFNLGdCQUFnQixHQUFHLElBQUEsa0JBQXFCLEdBQUUsQ0FBQTtBQUNoRCxNQUFNLHNCQUFzQixHQUFHLElBQUEsd0JBQTJCLEVBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtBQUMvRSxNQUFNLGVBQWUsR0FBRyxJQUFBLGlCQUFvQixFQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtBQUM1RSxNQUFNLGNBQWMsR0FBRyxtQkFBbUIsRUFBRSxDQUFBO0FBRXJDLE1BQU0sV0FBVyxHQUFnQixDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLGVBQWUsQ0FBQyxDQUFBO0lBQ2xGLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUEsb0JBQVcsRUFBQywwQkFBWSxDQUFDLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUE7QUFIWSxRQUFBLFdBQVcsZUFHdkIifQ==