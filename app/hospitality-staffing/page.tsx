import { generateMetadata as generateIndustryMetadata } from '@/components/templates/IndustryPage'
import IndustryPage from '@/components/templates/IndustryPage'
import { INDUSTRIES } from '@/constants/content'

export const metadata = generateIndustryMetadata(INDUSTRIES.hospitality)

export default function HospitalityStaffingPage() {
  return <IndustryPage content={INDUSTRIES.hospitality} />
}
