import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { BRAND } from '@/constants/content'

export const metadata: Metadata = {
  title: `Careers - ${BRAND.name}`,
  description: `Join ${BRAND.shortName} and be part of a global team delivering exceptional workforce solutions. Explore career opportunities with us.`,
  keywords: ['Hudson careers', 'job opportunities', 'join Hudson', 'careers at Hudson', 'work at Hudson', 'Hudson jobs'],
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: `Careers - ${BRAND.name}`,
    description: `Join ${BRAND.shortName} and be part of a global team delivering exceptional workforce solutions.`,
    url: `${BRAND.url}/careers`,
  },
}

export default function CareersPage() {
  redirect('http://hudsonmanpower.recruitee.com/')
}




