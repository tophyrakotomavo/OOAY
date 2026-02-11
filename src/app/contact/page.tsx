import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo'

const contactDescription =
  "Contactez OOAY pour toute demande sur nos matieres premieres et nos produits artisanaux."

export const metadata: Metadata = {
  title: 'Contact',
  description: contactDescription,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `${SITE_NAME} | Contact`,
    description: contactDescription,
    url: '/contact',
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: `${SITE_NAME} | Contact`,
    description: contactDescription,
    images: [DEFAULT_OG_IMAGE],
  },
}

const ContactPage = () => <ContactPageClient />

export default ContactPage
