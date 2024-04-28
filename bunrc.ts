import dts from "bun-plugin-dts";

await Bun.build({
  format: "esm",
  minify: true,
  splitting: true,
  target: "browser",
  outdir: "./dist",
  plugins: [dts()],
  naming: "[dir]/[name].[ext]",
  entrypoints: ["src/index.ts"],
});
