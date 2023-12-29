import { Options, defineConfig } from 'tsup';

export default defineConfig((options) => {
  const commonOptions: Partial<Options> = {
    ...options,
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    dts: true,
    legacyOutput: true,
  };

  return [
    {
      ...commonOptions,
      format: ['cjs'],
      target: 'es5',
      dts: false,
    },
    {
      ...commonOptions,
      format: ['esm'],
      target: 'es6',
    },
  ];
});
