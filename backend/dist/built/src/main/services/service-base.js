"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceBase = void 0;
const init_base_1 = require("./init-base");
class ServiceBase extends init_base_1.InitBase {
    constructor(name, log, defaultConfig) {
        super(name, log, defaultConfig);
        this._state = {
            started: false,
            stopping: false,
        };
    }
    get state() {
        return this._state;
    }
    init(opt) {
        super.init(opt);
        this.state.started = false;
        this.state.stopping = false;
    }
    async start() {
        if (this.state.started) {
            this._log.info(`service ${this.name} already started : ignore`);
            return false;
        }
        this.state.started = await this.run();
        if (this._state.started) {
            this._log.info(`service ${this.name} started`);
        }
        else {
            this._log.info(`service ${this.name} did not start`);
        }
        return this.state.started;
    }
    async stop() {
        if (!this.state.started || this.state.stopping) {
            if (this.state.stopping) {
                this._log.warn(`service ${this.name} is already stopping : ignore`);
            }
            else {
                this._log.warn(`service ${this.name} is not started : ignore`);
            }
            return false;
        }
        try {
            this.state.stopping = true;
            const stopped = await this.end();
            if (stopped) {
                this._log.info(`service ${this.name} stopped`);
            }
            else {
                this._log.info(`service ${this.name} did not stop`);
            }
            this.state.started = !stopped;
            return stopped;
        }
        finally {
            this.state.stopping = false;
        }
    }
}
exports.ServiceBase = ServiceBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vc2VydmljZXMvc2VydmljZS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDJDQUFzQztBQUV0QyxNQUFlLFdBQWUsU0FBUSxvQkFBVztJQU0vQyxZQUFzQixJQUFZLEVBQUUsR0FBZSxFQUFFLGFBQWlCO1FBQ3BFLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBTnZCLFdBQU0sR0FBcUI7WUFDbkMsT0FBTyxFQUFFLEtBQUs7WUFDZCxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFBO0lBSUQsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQixDQUFDO0lBSU0sSUFBSSxDQUFDLEdBQWdCO1FBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO0lBQzdCLENBQUM7SUFJTSxLQUFLLENBQUMsS0FBSztRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksMkJBQTJCLENBQUMsQ0FBQTtZQUMvRCxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFBO1NBQy9DO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLENBQUE7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO0lBQzNCLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLCtCQUErQixDQUFDLENBQUE7YUFDcEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxDQUFBO2FBQy9EO1lBQ0QsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUNELElBQUk7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7WUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDaEMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQTthQUMvQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFBO2FBQ3BEO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUE7WUFDN0IsT0FBTyxPQUFPLENBQUE7U0FDZjtnQkFBUztZQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtTQUM1QjtJQUNILENBQUM7Q0FDRjtBQUVRLGtDQUFXIn0=