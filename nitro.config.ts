import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  output: {
    dir: '.vercel/output'
  },
  vercel: {
    regions: ['all']
  }
})
