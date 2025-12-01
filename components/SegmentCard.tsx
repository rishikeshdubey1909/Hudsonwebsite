'use client'

import { memo } from 'react'
import BaseCard from './ui/BaseCard'

interface SegmentCardProps {
  icon: string
  title: string
  description: string
  href: string
  delay?: number
}

function SegmentCard({ icon, title, description, href, delay = 0 }: SegmentCardProps) {
  return <BaseCard icon={icon} title={title} description={description} href={href} delay={delay} iconSize="text-5xl" />
}

export default memo(SegmentCard)
