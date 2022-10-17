"use strict";
const log_1 = require("../../../main/log");
const e2eHelper = {
    expectResponse: (res, statusCode, body) => {
        try {
            expect(res.statusCode).toEqual(statusCode);
            expect(res.headers).toHaveProperty('date');
            expect(res.headers.date).toBeTruthy();
            if (res.headers.date) {
                const now = Date.now();
                const dateHeaderValue = Date.parse(res.headers.date);
                expect(dateHeaderValue).toBeLessThanOrEqual(now);
                expect(dateHeaderValue).toBeGreaterThan(now - 3000);
            }
            if (body) {
                expect(res.headers).toHaveProperty('content-type', 'application/json; charset=utf-8');
                expect(res.body).toEqual(body);
                if (res.headers['transfer-encoding'] !== 'chunked') {
                    expect(res.headers).toHaveProperty('content-length', `${JSON.stringify(body).length}`);
                }
            }
            else if (body === null) {
                expect(res.headers).not.toHaveProperty('content-type');
                expect(res.headers).not.toHaveProperty('content-length');
            }
        }
        catch (err) {
            if (body) {
                log_1.log.debug('actual body :', res.body);
            }
            throw err;
        }
    },
    waitForLogInfo: (logInfoSpy) => async (logMessage) => new Promise((resolve) => {
        const timer = setInterval(() => {
            try {
                expect(logInfoSpy).toHaveBeenCalledWith(logMessage);
                clearInterval(timer);
                resolve();
            }
            catch (e) {
            }
        }, 10);
    }),
};
module.exports = e2eHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L2UyZS91dGlscy9lMmUtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSwyQ0FBdUM7QUFHdkMsTUFBTSxTQUFTLEdBQWM7SUFDM0IsY0FBYyxFQUFFLENBQUMsR0FBYSxFQUFFLFVBQWtCLEVBQUUsSUFBSyxFQUFRLEVBQUU7UUFDakUsSUFBSTtZQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ3JDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtnQkFDdEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNwRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2hELE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFBO2FBQ3BEO1lBQ0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLGlDQUFpQyxDQUFDLENBQUE7Z0JBQ3JGLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUM5QixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxTQUFTLEVBQUU7b0JBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2lCQUN2RjthQUNGO2lCQUFNLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dCQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTthQUN6RDtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLElBQUksRUFBRTtnQkFDUixTQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDckM7WUFDRCxNQUFNLEdBQUcsQ0FBQTtTQUNWO0lBQ0gsQ0FBQztJQUNELGNBQWMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQ25ELElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDNUIsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJO2dCQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFDbkQsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNwQixPQUFPLEVBQUUsQ0FBQTthQUNWO1lBQUMsT0FBTyxDQUFDLEVBQUU7YUFFWDtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNSLENBQUMsQ0FBQztDQUNMLENBQUE7QUFFRCxpQkFBUyxTQUFTLENBQUEifQ==