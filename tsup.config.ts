import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/*.ts"],
    target: "es2021",
    format: ["esm", "cjs"],
    platform: "node",
    skipNodeModulesBundle: true,
    clean: true,
    minify: false,
    splitting: false,
    keepNames: true,
    sourcemap: false,
    bundle: false,
    esbuildOptions(options, { format }) {
        options.outExtension = { ".js": ".js" };
        options.outdir = format;
    }
});
