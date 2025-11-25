import { generateMetadata as generateIndustryMetadata } from '@/components/templates/IndustryPage'
import IndustryPage from '@/components/templates/IndustryPage'
import { INDUSTRIES } from '@/constants/content'

export const metadata = generateIndustryMetadata(INDUSTRIES.it)

export default function USITStaffingPage() {
  return <IndustryPage content={INDUSTRIES.it} />
}
