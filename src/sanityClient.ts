import { createClient } from '@sanity/client'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'skl3obvi'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
const readToken = import.meta.env.VITE_SANITY_READ_TOKEN

export const client = createClient({
  projectId,
  dataset,
  useCdn: import.meta.env.PROD,
  apiVersion: '2024-01-01',
  ...(readToken ? { token: readToken, useCdn: false } : {}),
})
