import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/variables.css',
  namespace: 'monomer',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
