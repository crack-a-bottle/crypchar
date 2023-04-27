import * as assert from "assert";
import * as crypchar from "../src";

describe("crypchar", () => {
    describe("add", () => {
        it("should add the given key to each byte of the given data", () => {
            assert.strictEqual(crypchar.add("Hello, world!", 1, "utf8"), "Ifmmp-!xpsme\"");
        });
    });
    describe("subtract", () => {
        it("should subtract the given key from each byte of the given data", () => {
            assert.strictEqual(crypchar.subtract("Ifmmp-!xpsme\"", 1, "utf8"), "Hello, world!");
        });
    });
    describe("and", () => {
        it("should perform a bitwise AND operation on each byte of the given data using the given key", () => {
            assert.strictEqual(crypchar.and("Hello, world!", 254, "utf8"), "Hdlln, vnrld ");
        });
    });
    describe("or", () => {
        it("should perform a bitwise OR operation on each byte of the given data using the given key", () => {
            assert.strictEqual(crypchar.or("Hello, world!", 1, "utf8"), "Iemmo-!wosme!");
        });
    });
    describe("xor", () => {
        it("should perform a bitwise XOR operation on each byte of the given data using the given key", () => {
            assert.strictEqual(crypchar.xor("Hello, world!", 1, "utf8"), "Idmmn-!vnsme ");
        });
    });
});
