'use client'

import UltraPremiumCard from './ui/UltraPremiumCard'

interface SegmentCardProps {
  icon?: string
  logo?: string
  title: string
  description: string
  href: string
  delay?: number
}

export default function SegmentCard({ icon, logo, title, description, href, delay = 0 }: SegmentCardProps) {
  return <UltraPremiumCard icon={icon} logo={logo} title={title} description={description} href={href} delay={delay} />
}
