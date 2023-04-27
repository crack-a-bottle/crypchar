/** Performs a bitwise NOR operation on each byte of the given data using the given key. */
function nor(data: string | ArrayBuffer | NodeJS.ArrayBufferView, key: number, encoding: BufferEncoding): string;
function nor(data: string | ArrayBuffer | NodeJS.ArrayBufferView, key: number): Buffer;
function nor(data: string | ArrayBuffer | NodeJS.ArrayBufferView, key: number, encoding?: BufferEncoding): string | Buffer {
    const k = Number(key);
    if (Number.isNaN(k)) throw new TypeError("Argument \"key\" is not a number");

    let result: Buffer;
    if (Buffer.isBuffer(data)) result = data;
    else if (typeof data == "string") result = Buffer.from(data);
    else if (ArrayBuffer.isView(data)) result = Buffer.from(data.buffer);
    else if (data instanceof ArrayBuffer) result = Buffer.from(data);
    else throw new TypeError("Argument \"data\" must be of type string or an instance of Buffer, TypedArray, DataView, or ArrayBuffer.");

    result = result.map(x => (x | k & 255) ^ 255) as Buffer;
    return encoding ? result.toString(encoding) : result;
}

export = nor;
