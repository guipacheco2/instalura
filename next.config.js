/* eslint-disable @typescript-eslint/no-var-requires */
const { redirects } = require('./config/redirects')

module.exports = {
  future: {
    webpack5: true,
  },
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
}
