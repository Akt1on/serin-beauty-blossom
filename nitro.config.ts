import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  preset: 'vercel',
  // output: '.vercel/output', // Nitro handles this
  vercel: {
    regions: ['all'], // or specific regions
  },
})