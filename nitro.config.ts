import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  output: {
    dir: '.vercel/output'
  },
  vercel: {
    regions: ['all']
  },
  // Ensure public assets are copied
  publicAssets: [{ dir: './public' }]
})