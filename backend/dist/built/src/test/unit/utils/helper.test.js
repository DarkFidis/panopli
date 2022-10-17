"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_when_1 = require("jest-when");
describe('helper unit tests', () => {
    let helper;
    beforeAll(() => {
        helper = require('../../../main/utils/helper');
    });
    describe('asCallback', () => {
        test('should invoke callback from promise with resolved value', (done) => {
            const expectedValue = 'myvalue';
            const promiseFactory = jest.fn();
            promiseFactory.mockResolvedValue(expectedValue);
            const p = promiseFactory();
            const cb = jest.fn();
            helper.asCallback(p, cb);
            setImmediate(() => {
                expect(cb).toHaveBeenNthCalledWith(1, null, expectedValue);
                done();
            });
        });
        test('should invoke callback from promise with rejected error', (done) => {
            const promiseFactory = jest.fn();
            const expectedError = new Error('myerror');
            promiseFactory.mockRejectedValue(expectedError);
            const p = promiseFactory();
            const cb = jest.fn();
            helper.asCallback(p, cb);
            setImmediate(() => {
                expect(cb).toHaveBeenNthCalledWith(1, expectedError);
                done();
            });
        });
    });
    describe('fromCallback', () => {
        test('should return a resolved promise with value from callback', async () => {
            const expectedValue = 'myvalue';
            const fn = (cb) => {
                cb(null, expectedValue);
            };
            const promise = helper.fromCallback(fn);
            expect(promise).toBeDefined();
            const result = await promise;
            expect(result).toEqual(expectedValue);
        });
        test('should return a rejected promise with error from callback', async () => {
            const expectedError = new Error('myerror');
            const fn = (cb) => {
                cb(expectedError);
            };
            const promise = helper.fromCallback(fn);
            await expect(promise).rejects.toThrowError(expectedError);
        });
    });
    describe('isArray', () => {
        it('should return true if input is an array', () => {
            const result = helper.isArray(['foo', 'bar']);
            expect(result).toBe(true);
        });
    });
    describe('isObject', () => {
        it('should return true if input is an array', () => {
            const result = helper.isObject({ foo: 'bar' });
            expect(result).toBe(true);
        });
    });
    describe('repeat', () => {
        test('should repeat 3 times', () => {
            const iterator = jest.fn();
            const count = 3;
            helper.repeat(count, iterator);
            for (let i = 0; i < count; i += 1) {
                expect(iterator).toHaveBeenCalledWith(i);
            }
            expect(iterator).toHaveBeenCalledTimes(count);
        });
    });
    describe('staticImplements', () => {
        test('should return a function', () => {
            const result = helper.staticImplements();
            expect(typeof result).toEqual('function');
            result(undefined);
        });
    });
    describe('toExpressErrorMw', () => {
        let mockAsCallback;
        beforeAll(() => {
            mockAsCallback = jest.spyOn(helper, 'asCallback').mockImplementation();
        });
        afterAll(() => {
            mockAsCallback.mockRestore();
        });
        test('should return an express error middleware function given a promise', () => {
            const err = new Error('oops');
            const req = {};
            const res = {};
            const handler = jest.fn();
            const handlerResult = 'handler-result';
            handler.mockReturnValue(handlerResult);
            const next = jest.fn();
            (0, jest_when_1.when)(mockAsCallback)
                .calledWith(expect.anything(), next)
                .mockImplementation(async (promise) => {
                await promise;
                expect(handler).toHaveBeenCalledWith(err, req, res);
            });
            const result = helper.toExpressErrorMw(handler);
            result(err, req, res, next);
            expect(mockAsCallback).toHaveBeenCalledWith(expect.anything(), next);
        });
    });
    describe('toExpressMw', () => {
        let mockAsCallback;
        beforeAll(() => {
            mockAsCallback = jest.spyOn(helper, 'asCallback').mockImplementation();
        });
        afterAll(() => {
            mockAsCallback.mockRestore();
        });
        test('should return an express middleware function given a promise', () => {
            const req = {};
            const res = {};
            const handler = jest.fn();
            const handlerResult = 'handler-result';
            handler.mockReturnValue(handlerResult);
            const next = jest.fn();
            (0, jest_when_1.when)(mockAsCallback)
                .calledWith(expect.anything(), next)
                .mockImplementation(async (promise) => {
                await promise;
                expect(handler).toHaveBeenCalledWith(req, res);
            });
            const result = helper.toExpressMw(handler);
            result(req, res, next);
            expect(mockAsCallback).toHaveBeenCalledWith(expect.anything(), next);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3V0aWxzL2hlbHBlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseUNBQWdDO0FBSWhDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsSUFBSSxNQUFrQixDQUFBO0lBQ3RCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixNQUFNLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUE7SUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtRQUMxQixJQUFJLENBQUMseURBQXlELEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUV2RSxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUE7WUFDL0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1lBQ2hDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMvQyxNQUFNLENBQUMsR0FBRyxjQUFjLEVBQXdCLENBQUE7WUFDaEQsTUFBTSxFQUFFLEdBQXdCLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtZQUV6QyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUV4QixZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUNoQixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQTtnQkFDMUQsSUFBSSxFQUFFLENBQUE7WUFDUixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLHlEQUF5RCxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFFdkUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxD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