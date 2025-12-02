'use client'

import { memo } from 'react'

interface SchemaInjectorProps {
  schema: object
}

function SchemaInjector({ schema }: SchemaInjectorProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default memo(SchemaInjector)

