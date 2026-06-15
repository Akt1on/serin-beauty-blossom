import { defineNitroConfig } from "nitro/config";

// Nitro picks this up automatically on Vercel CI builds (outside the Lovable
// sandbox). Inside Lovable the preset is forced to cloudflare and these
// overrides are ignored — safe to keep in the repo for self-deploy.
export default defineNitroConfig({
  preset: "vercel",
  publicAssets: [{ dir: "./public" }],
});
