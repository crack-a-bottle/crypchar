import { _internal } from ".";

/** Divides each byte of the given data by the given key(s). */
function divide(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    key: number | number[],
    encoding: string
): string;
function divide(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    key: number | number[]
): Uint8Array;
function divide(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    key: number | number[],
    encoding?: string
): string | Uint8Array {
    const k = Array.isArray(key)
        ? key.map(x => (!isNaN(x) ? Number(x) : 0))
        : [!isNaN(key) ? Number(key) : 0];
    const result = _internal
        .toBuffer(data)
        .map((x, i) => (x / k[i % k.length]) & 255);
    return encoding
        ? typeof Buffer != "undefined" && Buffer.isBuffer(result)
            ? result.toString(encoding as BufferEncoding)
            : new TextDecoder(encoding).decode(result)
        : result;
}

export = divide;
