/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@instalura/ui'])
const { redirects } = require('./config/redirects')

module.exports = withPlugins([withTM], {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
        source: '/app/:path*/',
      },
    ]
  },
  async redirects() {
    return redirects
  },
  trailingSlash: true,
})
