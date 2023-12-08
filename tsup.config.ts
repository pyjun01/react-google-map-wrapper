import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  dts: true,
  legacyOutput: true,
});
