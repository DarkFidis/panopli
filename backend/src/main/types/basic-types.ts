export type JsonArray = ArrayLike<JsonEntry>

export type JsonEntry = Primitive | JsonArray | JsonMap

export type JsonMap = Mapable<JsonEntry>

export interface Mapable<T> {
  [key: string]: T
}

export type Optional<T> = T | undefined

export type CatchParam = string | Error | undefined

export declare type Primitive = string | number | boolean | undefined | null
