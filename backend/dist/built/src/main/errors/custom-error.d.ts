declare class CustomError extends Error {
    protected static handleArgs(message?: string | Error, orig?: Error): {
        message?: string;
        orig?: Error;
    };
    protected readonly _orig?: Error;
    constructor(message?: string | Error, orig?: Error);
    get orig(): Error | undefined;
}
export { CustomError };
