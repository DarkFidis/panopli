"use strict";
const got_1 = require("got");
const clientHelper = {
    baseUrl: 'http://localhost:8342',
    client: got_1.default,
    init: () => {
        const { webServer } = require('../../../main/server');
        if (process.env.BASE_URL) {
            clientHelper.baseUrl = process.env.BASE_URL;
        }
        else if (webServer.url) {
            clientHelper.baseUrl = webServer.url;
        }
        clientHelper.client = got_1.default.extend({
            prefixUrl: clientHelper.baseUrl,
            responseType: 'json',
            retry: {
                limit: 0,
            },
            throwHttpErrors: false,
            timeout: {
                request: 5000,
            },
        });
    },
};
module.exports = clientHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy90ZXN0L2UyZS91dGlscy9jbGllbnQtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBcUI7QUFJckIsTUFBTSxZQUFZLEdBQWlCO0lBQ2pDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaEMsTUFBTSxFQUFFLGFBQUc7SUFDWCxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ1QsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ3JELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsWUFBWSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQTtTQUM1QzthQUFNLElBQUksU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN4QixZQUFZLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUE7U0FDckM7UUFDRCxZQUFZLENBQUMsTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7WUFDL0IsU0FBUyxFQUFFLFlBQVksQ0FBQyxPQUFPO1lBQy9CLFlBQVksRUFBRSxNQUFNO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsQ0FBQzthQUNUO1lBQ0QsZUFBZSxFQUFFLEtBQUs7WUFDdEIsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQUVELGlCQUFTLFlBQVksQ0FBQSJ9