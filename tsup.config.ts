import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  dts: true,
  clean: true,
  outDir: './dist',
  splitting: false,
  sourcemap: false,
  treeshake: true,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  entry: ['src/**/*.ts'],
  tsconfig: './tsconfig.json',
}))
