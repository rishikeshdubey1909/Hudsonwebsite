import ContactFormClient from './ContactFormClient'
import { BRAND } from '@/constants/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND.shortName}`,
  description: `Get in touch with ${BRAND.name}. Contact us for staffing solutions, job opportunities, or general inquiries.`,
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactFormClient />
    </div>
  )
}
