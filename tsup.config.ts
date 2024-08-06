import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    sourcemap: true,
    dts: true,
    clean: true,
  },
  {
    entry: ["src/processors/*.ts"],
    outDir: "dist/processors",
    target: "esnext",
    splitting: true,
  },
]);
