import { generateMetadata as generateIndustryMetadata } from '@/components/templates/IndustryPage'
import IndustryPage from '@/components/templates/IndustryPage'
import { INDUSTRIES } from '@/constants/content'

export const metadata = generateIndustryMetadata(INDUSTRIES.oilGas)

export default function OilAndGasStaffingPage() {
  return <IndustryPage content={INDUSTRIES.oilGas} />
}
