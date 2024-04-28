// Copyright (c) 2024 meluiz
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths({ root: './' })],
  test: {
    reporters: 'basic',
    typecheck: {
      enabled: true,
    },
    coverage: {
      all: true,
      include: ['src'],
      provider: 'v8',
      reporter: ['html', 'clover', 'cobertura', 'lcov', 'text'],
    },
  },
})
