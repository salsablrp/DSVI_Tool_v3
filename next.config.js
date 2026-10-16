/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production'
module.exports = {
  // basePath: isDev ? '' : '/DSVI_Tool_v3',
  // '' for Netlify, '/DSVI_Tool_v3' for GitHub Pages (set in the deploy workflow)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // assetPrefix: isDev ? '': '/DSVI_Tool_v3/',
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['https://server.arcgisonline.com'],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.geojson$/,
      loader: 'json-loader',
    })

    // Important: return the modified config
    return config
  },
}
