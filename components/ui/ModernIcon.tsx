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
  'code': (strokeWidth = 1.5) => createIconSVG(
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </>,
    strokeWidth
  ),
  'server': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916v-.243" />,
    strokeWidth
  ),
  'fire': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />,
    strokeWidth
  ),
  'beaker': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.57.393A9.065 9.065 0 0121 15a9.065 9.065 0 00-6.23-.693m0 0l-.659-1.591M14.25 3.104l.659 1.591m0 0l1.57.393M14.25 3.104l-1.57.393M5 14.5l-1.57.393A9.065 9.065 0 003 15c0-2.448.656-4.75 1.8-6.75m0 0l.659-1.591M5 14.5l-1.57-.393m0 0A9.065 9.065 0 003 15m1.57.393L5 14.5" />,
    strokeWidth
  ),
  'cpu': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />,
    strokeWidth
  ),
  'utensils': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5V6a2.25 2.25 0 114.5 0v4.5m-4.5 0h9" />,
    strokeWidth
  ),
  'sparkles': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />,
    strokeWidth
  ),
  'star': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
    strokeWidth
  ),
  'hand-raised': (strokeWidth = 1.5) => createIconSVG(
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75v.75a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-.75m3.075 0a6.108 6.108 0 01-.525-.175 2.029 2.029 0 00-2.003-.877 2.029 2.029 0 00-2.003.877 2.028 2.028 0 01-2.003-.877 2.028 2.028 0 00-2.003.877 2.028 2.028 0 01-2.003-.877 2.028 2.028 0 00-2.003.877v.75a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.75m3.075 0a6.108 6.108 0 01-.525-.175" />,
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
  '⚙️': 'server',
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
