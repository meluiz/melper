import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  minify: true,
  outDir: 'dist',
  sourcemap: false,
  treeshake: true,
  format: ['cjs', 'esm'],
  entry: [
    './src/index.ts',
    './src/guard.ts',
    './src/number.ts',
    './src/string.ts',
  ],
})
