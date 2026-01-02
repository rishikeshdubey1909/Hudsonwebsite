interface SchemaInjectorProps {
  schema: object
}

// Helper to safely stringify schema, removing any non-serializable values
function safeStringify(obj: object): string {
  try {
    return JSON.stringify(obj, (key, value) => {
      // Remove functions, undefined, and symbols
      if (typeof value === 'function' || typeof value === 'undefined' || typeof value === 'symbol') {
        return undefined
      }
      return value
    }, 0)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error stringifying schema:', error)
    }
    return '{}'
  }
}

export default function SchemaInjector({ schema }: SchemaInjectorProps) {
  if (!schema || typeof schema !== 'object') {
    return null
  }

  const jsonString = safeStringify(schema)
  
  if (!jsonString || jsonString === '{}') {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  )
}

