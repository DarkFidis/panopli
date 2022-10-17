"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
const jestExpress = require('jest-express');
describe('router unit tests', () => {
    let jsonBodyParser;
    let urlencodedBodyParser;
    let rawBodyParser;
    let cookieParserFactory;
    let express;
    let cookieParserMw;
    let registerApp;
    let helloWorldMw;
    let toExpressMw;
    beforeAll(() => {
        jsonBodyParser = jest.fn();
        urlencodedBodyParser = jest.fn();
        rawBodyParser = jest.fn();
        const bodyParser = {
            json: jest.fn(),
            raw: jest.fn(),
            urlencoded: jest.fn(),
        };
        jest.doMock('../../main/utils/helper');
        ({ toExpressMw } = require('../../main/utils/helper'));
        jest.doMock('../../main/middlewares/hello-world');
        ({ helloWorldMw } = require('../../main/middlewares/hello-world'));
        (0, jest_when_1.when)(bodyParser.json).calledWith().mockReturnValue(jsonBodyParser);
        (0, jest_when_1.when)(bodyParser.urlencoded)
            .calledWith({ extended: false })
            .mockReturnValue(urlencodedBodyParser);
        (0, jest_when_1.when)(bodyParser.raw).calledWith({ limit: '10mb', type: '*/*' }).mockReturnValue(rawBodyParser);
        jest.doMock('body-parser', () => bodyParser);
        jest.doMock('cookie-parser');
        cookieParserFactory = require('cookie-parser');
        cookieParserMw = jest.fn();
        (0, jest_when_1.when)(cookieParserFactory).calledWith().mockReturnValue(cookieParserMw);
        ({ registerApp } = require('../../main/router'));
        expect(cookieParserFactory).toHaveBeenNthCalledWith(1);
        const expressMock = jest.fn(jestExpress);
        expressMock.static = jestExpress.static;
        jest.doMock('express', () => expressMock);
        express = require('express');
    });
    describe('registerApp', () => {
        test('should register app middlewares', () => {
            const app = express();
            const helloWorldExpressMw = jest.fn();
            (0, jest_when_1.when)(toExpressMw).calledWith(helloWorldMw).mockReturnValue(helloWorldExpressMw);
            registerApp(app);
            expect(app.use).toHaveBeenCalledWith(cookieParserMw, jsonBodyParser, urlencodedBodyParser, rawBodyParser);
            expect(app.get).toHaveBeenCalledWith('/', helloWorldExpressMw);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3JvdXRlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseUNBQWdDO0FBSWhDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUUzQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLElBQUksY0FBeUIsQ0FBQTtJQUM3QixJQUFJLG9CQUErQixDQUFBO0lBQ25DLElBQUksYUFBd0IsQ0FBQTtJQUM1QixJQUFJLG1CQUE4QixDQUFBO0lBQ2xDLElBQUksT0FBd0MsQ0FBQTtJQUM1QyxJQUFJLGNBQXlCLENBQUE7SUFDN0IsSUFBSSxXQUFxQyxDQUFBO0lBQ3pDLElBQUksWUFBdUIsQ0FBQTtJQUMzQixJQUFJLFdBQXNCLENBQUE7SUFDMUIsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDMUIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQ2hDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDekIsTUFBTSxVQUFVLEdBQUc7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1NBQ3RCLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQ3JDO1FBQUEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUNoRDtRQUFBLENBQUMsRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFBO1FBQ25FLElBQUEsZ0JBQUksRUFBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xFLElBQUEsZ0JBQUksRUFBQyxVQUFVLENBQUMsVUFBVSxDQUFDO2FBQ3hCLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMvQixlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUN4QyxJQUFBLGdCQUFJLEVBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDNUIsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzlDLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUE7UUFDMUIsSUFBQSxnQkFBSSxFQUFDLG1CQUFtQixDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUNyRTtRQUFBLENBQUMsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ2pELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RELE1BQU0sV0FBVyxHQUFvQyxJQUFJLENBQUMsRUFBRSxDQUMxRCxXQUE0RCxDQUM3RCxDQUFBO1FBQ0QsV0FBVyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtRQUMzQixJQUFJLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO1lBRTNDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFBO1lBQ3JCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBQ3JDLElBQUEsZ0JBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLENBQUE7WUFFL0UsV0FBVyxDQUFDLEdBQWtCLENBQUMsQ0FBQTtZQUUvQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUNsQyxjQUFjLEVBQ2QsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixhQUFhLENBQ2QsQ0FBQTtZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDLENBQUE7UUFDaEUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=