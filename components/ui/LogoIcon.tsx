'use client'

import { memo, useState } from 'react'
import Image from 'next/image'
import ModernIcon from './ModernIcon'

interface LogoIconProps {
  src?: string
  icon?: string
  alt?: string
  className?: string
  size?: number
}

function LogoIcon({ src, icon, alt = '', className = '', size = 40 }: LogoIconProps) {
  const [imageError, setImageError] = useState(false)

  // If image source is provided and no error, use image
  if (src && !imageError) {
    return (
      <div className={`${className} flex items-center justify-center`} style={{ width: size, height: size }}>
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
          onError={() => setImageError(true)}
        />
      </div>
    )
  }

  // Otherwise, use ModernIcon
  if (icon) {
    return <ModernIcon name={icon} className={className} />
  }

  // Fallback
  return null
}

export default memo(LogoIcon)

