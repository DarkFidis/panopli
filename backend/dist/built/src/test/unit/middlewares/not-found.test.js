"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("jest-express/lib/request");
const response_1 = require("jest-express/lib/response");
describe('not found middleware unit tests', () => {
    let NotFoundError;
    let req;
    let res;
    let notFound;
    beforeAll(() => {
        jest.doMock('../../../main/errors/not-found-error');
        ({ NotFoundError } = require('../../../main/errors/not-found-error'));
        req = new request_1.Request();
        res = new response_1.Response();
        ({ notFound } = require('../../../main/middlewares/not-found'));
    });
    beforeEach(() => {
        res.setHeadersSent(false);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    describe('notFound', () => {
        test('should respond an error', () => {
            const next = jest.fn();
            const fn = () => notFound(req, res, next);
            try {
                fn();
            }
            catch (err) {
                expect(err).toBeInstanceOf(NotFoundError);
                expect(next).not.toHaveBeenCalled();
            }
        });
        test('should ignore given response is already sent', () => {
            res.setHeadersSent(true);
            const next = jest.fn();
            notFound(req, res, next);
            expect(next).not.toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L21pZGRsZXdhcmVzL25vdC1mb3VuZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0RBQWtEO0FBQ2xELHdEQUFvRDtBQUVwRCxRQUFRLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO0lBQy9DLElBQUksYUFBd0IsQ0FBQTtJQUM1QixJQUFJLEdBQVksQ0FBQTtJQUNoQixJQUFJLEdBQWEsQ0FBQTtJQUNqQixJQUFJLFFBQXFDLENBQUE7SUFDekMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FDbEQ7UUFBQSxDQUFDLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUE7UUFDbkIsR0FBRyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUNuQjtRQUFBLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsQ0FBQyxDQUFBO0lBQ0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDRixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNaLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7WUFFbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBRXRCLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUNkLFFBQVEsQ0FBQyxHQUFnQyxFQUFFLEdBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFckYsSUFBSTtnQkFDRixFQUFFLEVBQUUsQ0FBQTthQUNMO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsOENBQThDLEVBQUUsR0FBRyxFQUFFO1lBRXhELEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBRXRCLFFBQVEsQ0FBQyxHQUFnQyxFQUFFLEdBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9