import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { search, type SearchResult } from './searchIndex'
import styles from './SearchModal.module.css'
import clsx from 'clsx'

interface Props {
  onClose: () => void
}

export function SearchModal({ onClose }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    setResults(search(query))
    setSelected(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((prev) => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && results[selected]) {
      navigate(results[selected].path)
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.inputRow}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            placeholder="搜尋文章..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <kbd className={styles.esc}>ESC</kbd>
        </div>
        {results.length > 0 && (
          <ul className={styles.results}>
            {results.map((r, i) => (
              <li key={r.path}>
                <button
                  className={clsx(
                    styles.result,
                    i === selected && styles.resultActive
                  )}
                  onClick={() => {
                    navigate(r.path)
                    onClose()
                  }}
                  onMouseEnter={() => setSelected(i)}
                >
                  <span className={styles.resultCategory}>
                    {r.categoryLabel}
                  </span>
                  <span className={styles.resultTitle}>{r.title}</span>
                  <span className={styles.resultDesc}>{r.description}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query && results.length === 0 && (
          <div className={styles.empty}>找不到相關文章</div>
        )}
      </div>
    </div>
  )
}
