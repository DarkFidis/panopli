export declare type JsonArray = ArrayLike<JsonEntry>;
export declare type JsonEntry = Primitive | JsonArray | JsonMap;
export declare type JsonMap = Mapable<JsonEntry>;
export interface Mapable<T> {
    [key: string]: T;
}
export declare type Optional<T> = T | undefined;
export declare type Primitive = string | number | boolean | undefined | null;
