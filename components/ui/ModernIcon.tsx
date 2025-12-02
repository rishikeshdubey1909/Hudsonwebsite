'use client'

import { memo } from 'react'

interface ModernIconProps {
  name: string
  className?: string
  strokeWidth?: number
}

// Modern SVG Icons - Heroicons style (outline, stroke-based)
const createIconSVG = (paths: JSX.Element | JSX.Element[], strokeWidth: number = 1.5) => (
  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
    {paths}
  </svg>
)

const iconMap: Record<string, (strokeWidth?: number) => JSX.Element> = {
  'users': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
    strokeWidth
  ),
  'globe': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.944 11.944 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-2.284 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
    strokeWidth
  ),
  'bolt': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    strokeWidth
  ),
  'arrows-sync': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />,
    strokeWidth
  ),
  'lifebuoy': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138-3.448m4.138 3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.196a3.736 3.736 0 00-1.388-.88 3.737 3.737 0 00-1.388.88m2.268 2.268L7.288 19.67M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 01-2.528 0 3.736 3.736 0 01-.88-1.388M4.33 16.712l3.448-4.138m-3.448 4.138a9.014 9.014 0 01-1.306-1.652M7.288 19.67l4.138-3.448M7.288 19.67a9.014 9.014 0 01-1.652-1.306m0 0a9.027 9.027 0 01-1.306-1.652m1.652 1.306l3.448-4.138" />,
    strokeWidth
  ),
  'check-circle': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    strokeWidth
  ),
  'briefcase': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75h-4.5a.75.75 0 01-.75-.75v-4.25m0 0h4.5m-4.5 0l-1.5-1.5M3.75 9.75h16.5m-16.5 0a3 3 0 01-3-3V6a3 3 0 013-3h16.5a3 3 0 013 3v.75a3 3 0 01-3 3m-16.5 0h16.5" />,
    strokeWidth
  ),
  'building': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />,
    strokeWidth
  ),
  'computer': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />,
    strokeWidth
  ),
  'building-office': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15m-15 0v18m0-18h15m-15 0v18m15-18v18m-9-18v18m0-18h9m-9 0h9m-9 0V9m0 0h9m-9 0h9" />,
    strokeWidth
  ),
}

// Emoji to icon mapping
const emojiToIcon: Record<string, string> = {
  '👥': 'users',
  '🌍': 'globe',
  '⚡': 'bolt',
  '🔄': 'arrows-sync',
  '🛟': 'lifebuoy',
  '✅': 'check-circle',
  '💼': 'briefcase',
  '🏢': 'building',
  '💻': 'computer',
  '🏨': 'building-office',
}

function ModernIcon({ name, className = '', strokeWidth = 1.7 }: ModernIconProps) {
  // Check if it's an emoji and map it to icon name
  const iconName = emojiToIcon[name] || name
  
  const IconFactory = iconMap[iconName]
  
  if (!IconFactory) {
    // Fallback to emoji if icon not found
    return <span className={className}>{name}</span>
  }
  
  // Call the factory function with strokeWidth
  const IconComponent = IconFactory(strokeWidth)
  
  return (
    <div className={`${className} flex items-center justify-center`}>
      {IconComponent}
    </div>
  )
}

export default memo(ModernIcon)
