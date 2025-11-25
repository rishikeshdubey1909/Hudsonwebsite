import { generateMetadata as generateContentMetadata } from '@/components/templates/ContentPage'
import ContentPage from '@/components/templates/ContentPage'
import { EMPLOYEES } from '@/constants/content'

export const metadata = generateContentMetadata(EMPLOYEES)

export default function ForEmployeesPage() {
  return <ContentPage content={EMPLOYEES} />
}
