'use client'

interface SchemaInjectorProps {
  schema: object
}

export default function SchemaInjector({ schema }: SchemaInjectorProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

