import { useHeadings } from '@/hooks/useHeadings'
import styles from './TableOfContents.module.css'
import clsx from 'clsx'

export function TableOfContents() {
  const { headings, activeId } = useHeadings()

  if (headings.length === 0) return null

  return (
    <nav className={styles.toc} aria-label="目錄">
      <h4 className={styles.title}>目錄</h4>
      <ul className={styles.list}>
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={clsx(
                styles.link,
                h.level === 3 && styles.nested,
                activeId === h.id && styles.active
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
