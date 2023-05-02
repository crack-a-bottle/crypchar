import add from "./add";
import and from "./and";
import divide from "./divide";
import multiply from "./multiply";
import nand from "./nand";
import nor from "./nor";
import not from "./not";
import or from "./or";
import subtract from "./subtract";
import xnor from "./xnor";
import xor from "./xor";

/** @internal */
export const _internal = {
    /** Converts the given data (string, ArrayBuffer, TypedArray, DataView) to a Buffer. */
    toBuffer(data: string | ArrayBuffer | NodeJS.ArrayBufferView): Uint8Array {
        if (typeof Buffer != "undefined") {
            if (Buffer.isBuffer(data)) return data;
            else if (typeof data == "string") return Buffer.from(data);
            else if (ArrayBuffer.isView(data)) return Buffer.from(data.buffer);
            else if (data instanceof ArrayBuffer) return Buffer.from(data);
            else
                throw new TypeError(
                    'Argument "data" must be of type string or an instance of Buffer, TypedArray, DataView, or ArrayBuffer.'
                );
        } else {
            if (typeof data == "string") return new TextEncoder().encode(data);
            else if (ArrayBuffer.isView(data))
                return new Uint8Array(data.buffer);
            else if (data instanceof ArrayBuffer) return new Uint8Array(data);
            else
                throw new TypeError(
                    'Argument "data" must be of type string or an instance of TypedArray, DataView, or ArrayBuffer.'
                );
        }
    }
};

export { add, and, divide, multiply, nand, nor, not, or, subtract, xnor, xor };
