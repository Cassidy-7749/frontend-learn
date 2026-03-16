import type { ComponentType } from 'react'

export interface ContentItem {
  slug: string
  title: string
  description: string
  path: string
  component: () => Promise<{ default: ComponentType }>
}

export interface ContentCategory {
  id: string
  label: string
  icon: string
  items: ContentItem[]
}
