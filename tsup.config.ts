import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts', './src/number.ts'],
  dts: true,
  minify: true,
  outDir: 'dist',
  sourcemap: 'inline',
  format: ['cjs', 'esm'],
})
