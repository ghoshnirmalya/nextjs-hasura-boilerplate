/* eslint-disable */
require('dotenv').config()

const withImages = require('next-images')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withImages({
    target: 'server',
    webpack: config => {
      config.plugins = config.plugins || []

      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ]

      if (process.env.NODE_ENV === 'production') {
        config.devtool = 'cheap-module-source-map'
      }

      return config
    },
  })
)
