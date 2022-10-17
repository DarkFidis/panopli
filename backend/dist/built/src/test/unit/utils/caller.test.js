"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const baseDir = (0, path_1.resolve)(__dirname, '..', '..', '..');
describe('caller unit tests', () => {
    let stackback;
    let getCaller;
    beforeAll(() => {
        jest.doMock('stackback');
        stackback = require('stackback');
        ({ getCaller } = require('../../../main/utils/caller'));
    });
    test('should return caller source filename and line number', () => {
        const expectedResult = {
            file: 'sourcefile',
            line: 4,
        };
        const stack = [
            {
                getFileName: jest.fn(),
                getLineNumber: jest.fn(),
            },
            {
                getFileName: jest.fn(),
                getLineNumber: jest.fn(),
            },
        ];
        stack[1].getFileName.mockReturnValue((0, path_1.join)(baseDir, expectedResult.file));
        stack[1].getLineNumber.mockReturnValue(expectedResult.line);
        stackback.mockReturnValue(stack);
        const result = getCaller(baseDir);
        expect(result).toEqual(expectedResult);
        expect(stackback).toHaveBeenCalledWith(expect.any(Error));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3V0aWxzL2NhbGxlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQW9DO0FBRXBDLE1BQU0sT0FBTyxHQUFHLElBQUEsY0FBTyxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXBELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsSUFBSSxTQUFvQixDQUFBO0lBQ3hCLElBQUksU0FBb0IsQ0FBQTtJQUN4QixTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QixTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUMvQjtRQUFBLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLHNEQUFzRCxFQUFFLEdBQUcsRUFBRTtRQUVoRSxNQUFNLGNBQWMsR0FBRztZQUNyQixJQUFJLEVBQUUsWUFBWTtZQUNsQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUE7UUFDRCxNQUFNLEtBQUssR0FBRztZQUNaO2dCQUNFLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTthQUN6QjtZQUNEO2dCQUNFLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUN0QixhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTthQUN6QjtTQUNGLENBQUE7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFBLFdBQUksRUFBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDeEUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNELFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEMsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWpDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=