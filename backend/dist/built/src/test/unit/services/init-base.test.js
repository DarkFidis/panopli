"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_base_1 = require("../../../main/services/init-base");
describe('init base unit tests', () => {
    let log;
    beforeAll(() => {
        jest.doMock('../../../main/log');
        ({ log } = require('../../../main/log'));
    });
    describe('InitBase', () => {
        class MyInitBase extends init_base_1.InitBase {
            constructor() {
                super('my-init-base', log, MyInitBase.defaultConfig);
            }
        }
        MyInitBase.defaultConfig = {
            foo: 'bar',
        };
        test('should provide config property initialized with defaults', () => {
            const initBase = new MyInitBase();
            expect(initBase.config).not.toBe(MyInitBase.defaultConfig);
            expect(initBase.config).toEqual(MyInitBase.defaultConfig);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1iYXNlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvdGVzdC91bml0L3NlcnZpY2VzL2luaXQtYmFzZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTJEO0FBRzNELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsSUFBSSxHQUF3QixDQUFBO0lBQzVCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQy9CO1FBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUl4QixNQUFNLFVBQVcsU0FBUSxvQkFBMEI7WUFJakQ7Z0JBQ0UsS0FBSyxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3RELENBQUM7O1FBTGEsd0JBQWEsR0FBcUI7WUFDOUMsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFBO1FBS0gsSUFBSSxDQUFDLDBEQUEwRCxFQUFFLEdBQUcsRUFBRTtZQUVwRSxNQUFNLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFBO1lBRWpDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzNELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9