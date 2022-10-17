"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitBase = void 0;
class InitBase {
    constructor(name, log, defaultConfig) {
        this._name = name;
        this._log = log;
        this._defaultConfig = defaultConfig;
        this._config = { ...defaultConfig };
    }
    get name() {
        return this._name;
    }
    get config() {
        return this._config;
    }
    get defaultConfig() {
        return this._defaultConfig;
    }
    init(opt) {
        this._log.debug(`initializing ${this.name}`);
        this._config = {
            ...this.defaultConfig,
            ...opt,
        };
        this._log.debug(`${this.name} initialized`);
    }
}
exports.InitBase = InitBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vc2VydmljZXMvaW5pdC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLE1BQWUsUUFBUTtJQU1yQixZQUFzQixJQUFZLEVBQUUsR0FBZSxFQUFFLGFBQWlCO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFBO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFrQixDQUFBO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxHQUFHLGFBQWEsRUFBTyxDQUFBO0lBQzFDLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztJQUVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM1QixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQWdCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsR0FBRyxJQUFJLENBQUMsYUFBYTtZQUNyQixHQUFHLEdBQUc7U0FDUCxDQUFBO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0NBQ0Y7QUFFUSw0QkFBUSJ9