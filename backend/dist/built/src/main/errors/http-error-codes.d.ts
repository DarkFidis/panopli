declare enum ErrorCode {
    BAD_REQUEST = "BAD_REQUEST",
    FORBIDDEN = "FORBIDDEN",
    GATEWAY_TIMEOUT = "GATEWAY_TIMEOUT",
    IM_A_TEAPOT = "IM_A_TEAPOT",
    INTERNAL = "INTERNAL",
    NOT_FOUND = "NOT_FOUND",
    PLUGIN_EXECUTION = "PLUGIN_EXECUTION",
    SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
    TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
    UNAUTHORIZED = "UNAUTHORIZED"
}
declare enum ErrorStatusCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    IM_A_TEAPOT = 418,
    TOO_MANY_REQUESTS = 429,
    INTERNAL = 500,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504
}
export { ErrorCode, ErrorStatusCode };
