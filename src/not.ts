/** Performs a bitwise NOT operation on each byte of the given data. */
function not(data: string | ArrayBuffer | NodeJS.ArrayBufferView, encoding: BufferEncoding): string;
function not(data: string | ArrayBuffer | NodeJS.ArrayBufferView): Buffer;
function not(data: string | ArrayBuffer | NodeJS.ArrayBufferView, encoding?: BufferEncoding): string | Buffer {
    let result: Buffer;
    if (Buffer.isBuffer(data)) result = data;
    else if (typeof data == "string") result = Buffer.from(data);
    else if (ArrayBuffer.isView(data)) result = Buffer.from(data.buffer);
    else if (data instanceof ArrayBuffer) result = Buffer.from(data);
    else throw new TypeError("Argument \"data\" must be of type string or an instance of Buffer, TypedArray, DataView, or ArrayBuffer.");

    result = result.map(x => x ^ 255 & 255) as Buffer;
    return encoding ? result.toString(encoding) : result;
}

export = not;
