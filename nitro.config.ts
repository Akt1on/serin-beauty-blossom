import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  vercel: {
    regions: ['all'],
  },
  output: {
    dir: '.vercel/output'
  }
})