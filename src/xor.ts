import { _internal } from ".";

/** Performs a bitwise XOR operation on each byte of the given data using the given key. */
function xor(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    key: number,
    encoding: string
): string;
function xor(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    key: number
): Uint8Array;
function xor(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    key: number,
    encoding?: string
): string | Uint8Array {
    const k = !isNaN(key) ? Number(key) : 0;
    const result = _internal.toBuffer(data).map(x => x ^ (k & 255));
    return encoding
        ? typeof Buffer != "undefined" && Buffer.isBuffer(result)
            ? result.toString(encoding as BufferEncoding)
            : new TextDecoder(encoding).decode(result)
        : result;
}

export = xor;
