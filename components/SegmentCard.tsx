'use client'

import UltraPremiumCard from './ui/UltraPremiumCard'

interface SegmentCardProps {
  icon: string
  title: string
  description: string
  href: string
  delay?: number
}

export default function SegmentCard({ icon, title, description, href, delay = 0 }: SegmentCardProps) {
  return <UltraPremiumCard icon={icon} title={title} description={description} href={href} delay={delay} />
}
