export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function isFunction<T extends (...args: any[]) => unknown>(
  value: T | unknown
): value is T {
  return typeof value === 'function';
}

export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

export function isNaN(value: unknown): value is number {
  return Number.isNaN(value);
}

export function isNone(value: unknown): value is null | undefined {
  return isUndefined(value) || isNull(value);
}

export function isNotNone<T>(value: T | null | undefined): value is T {
  return !isNone(value);
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * @returns true for object like elements, false for null or functions
 */
export function isObject<T extends object>(value: T | unknown): value is T {
  return typeof value === 'object' && !isNull(value);
}

export function isPromise<T extends Promise<unknown>>(
  value: T | unknown
): value is T {
  return value instanceof Promise;
}

export function isRecord<T extends Record<string, unknown>>(
  value: T | unknown
): value is T {
  return isObject(value) && !isArray(value);
}

export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

export function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
  return value instanceof WeakMap;
}

export function isWeakSet(value: unknown): value is WeakSet<object> {
  return value instanceof WeakSet;
}
