import { generateMetadata as generateContentMetadata } from '@/components/templates/ContentPage'
import ContentPage from '@/components/templates/ContentPage'
import { EMPLOYERS } from '@/constants/content'

export const metadata = generateContentMetadata(EMPLOYERS)

export default function ForEmployersPage() {
  return <ContentPage content={EMPLOYERS} />
}
