/* eslint-disable @typescript-eslint/no-var-requires */
const Module = require('module')

// https://github.com/cypress-io/cypress/issues/8008
// https://github.com/vercel/next.js/pull/8668/files
// https://github.com/vercel/next.js/pull/19518/files
Module.prototype.require = new Proxy(Module.prototype.require, {
  apply(target, thisArg, argumentsList) {
    if (
      process.versions.pnp &&
      thisArg.id.endsWith(
        '/Cypress/resources/app/packages/server/lib/util/resolve.js',
      ) &&
      argumentsList[0] === 'resolve'
    ) {
      return {
        sync: (req, options) => {
          return require.resolve(req, { paths: [options.basedir] })
        },
      }
    }

    return Reflect.apply(target, thisArg, argumentsList)
  },
})
