"use strict";
const log_1 = require("./log");
const server_1 = require("./server");
const worker = {
    handleSignal: async (name) => {
        log_1.log.info(`received ${name} signal : stopping`);
        await worker.shutdown();
    },
    run: async () => {
        const signals = ['SIGINT', 'SIGTERM'];
        signals.forEach((signal) => {
            process.on(signal, () => {
                void worker.handleSignal(signal);
            });
        });
        process.on('message', (msg) => {
            log_1.log.info(`received message : ${msg}`);
            if (msg === 'shutdown') {
                log_1.log.info(`received shutdown message : stopping`);
                void worker.shutdown(0);
            }
        });
        server_1.webServer.init();
        await server_1.webServer.start();
        log_1.log.info(`/!\\ to stop worker : kill -s SIGTERM ${process.pid}`);
    },
    shutdown: async (exitCode = 1) => {
        try {
            await server_1.webServer.stop();
            process.exit(exitCode);
        }
        catch (err) {
            log_1.log.error(err);
            process.exit(1);
        }
    },
};
module.exports = worker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21haW4vd29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwrQkFBMkI7QUFDM0IscUNBQW9DO0FBR3BDLE1BQU0sTUFBTSxHQUFlO0lBQ3pCLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDM0IsU0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksb0JBQW9CLENBQUMsQ0FBQTtRQUM5QyxNQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQ0QsR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2QsTUFBTSxPQUFPLEdBQXFCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ3RCLEtBQUssTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QixTQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFBO1lBQ3JDLElBQUksR0FBRyxLQUFLLFVBQVUsRUFBRTtnQkFDdEIsU0FBRyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO2dCQUNoRCxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDeEI7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLGtCQUFTLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDaEIsTUFBTSxrQkFBUyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3ZCLFNBQUcsQ0FBQyxJQUFJLENBQUMseUNBQXlDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFDRCxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRTtRQUMvQixJQUFJO1lBQ0YsTUFBTSxrQkFBUyxDQUFDLElBQUksRUFBRSxDQUFBO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDdkI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLFNBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFFRCxpQkFBUyxNQUFNLENBQUEifQ==