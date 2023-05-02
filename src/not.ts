import { _internal } from ".";

/** Performs a bitwise NOT operation on each byte of the given data. */
function not(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    encoding: string
): string;
function not(data: string | ArrayBuffer | NodeJS.ArrayBufferView): Uint8Array;
function not(
    data: string | ArrayBuffer | NodeJS.ArrayBufferView,
    encoding?: string
): string | Uint8Array {
    const result = _internal.toBuffer(data).map(x => x ^ (255 & 255));
    return encoding
        ? typeof Buffer != "undefined" && Buffer.isBuffer(result)
            ? result.toString(encoding as BufferEncoding)
            : new TextDecoder(encoding).decode(result)
        : result;
}

export = not;
