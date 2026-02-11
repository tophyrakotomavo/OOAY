import type { Metadata } from 'next'
import GaleriesPageClient from './GaleriesPageClient'
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo'

const galeriesDescription =
  "Explorez la galerie OOAY et decouvrez nos produits et matieres premieres artisanales."

export const metadata: Metadata = {
  title: 'Galeries',
  description: galeriesDescription,
  alternates: {
    canonical: '/galeries',
  },
  openGraph: {
    title: `${SITE_NAME} | Galeries`,
    description: galeriesDescription,
    url: '/galeries',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `${SITE_NAME} | Galeries`,
    description: galeriesDescription,
    images: [DEFAULT_OG_IMAGE],
  },
}

const GaleriesPage = () => <GaleriesPageClient />

export default GaleriesPage
