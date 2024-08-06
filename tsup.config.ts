import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: "esm",
    dts: true,
  },
  {
    entry: ["src/processors/*.ts"],
    outDir: "dist/processors",
    target: "esnext",
  },
]);
