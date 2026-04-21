import {defineCliConfig} from 'sanity/cli'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.VITE_SANITY_PROJECT_ID ?? 'skl3obvi'
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.VITE_SANITY_DATASET ?? 'production'
const appId = process.env.SANITY_STUDIO_DEPLOY_APP_ID ?? 'xqu5nk1i3zr0sbxs4cfvctbq'

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId,
  }
})
