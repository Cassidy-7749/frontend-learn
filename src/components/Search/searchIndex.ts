import FlexSearch from 'flexsearch'
import { getAllItems } from '@/data/contentMap'

export interface SearchResult {
  title: string
  description: string
  path: string
  categoryLabel: string
}

let index: FlexSearch.Index | null = null
let items: SearchResult[] = []

function getIndex() {
  if (index) return { index, items }

  index = new FlexSearch.Index({
    tokenize: 'forward',
    resolution: 9,
  })

  items = getAllItems().map((item) => ({
    title: item.title,
    description: item.description,
    path: item.path,
    categoryLabel: item.category.label,
  }))

  items.forEach((item, i) => {
    index!.add(i, `${item.title} ${item.description} ${item.categoryLabel}`)
  })

  return { index, items }
}

export function search(query: string): SearchResult[] {
  if (!query.trim()) return []
  const { index, items } = getIndex()
  const ids = index.search(query, 10) as number[]
  return ids.map((id) => items[id])
}
