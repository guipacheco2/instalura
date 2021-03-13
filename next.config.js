/* eslint-disable @typescript-eslint/no-var-requires */
const { redirects } = require('./config/redirects')

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects
  },
}
