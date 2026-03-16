import { Link, useParams } from 'react-router'
import { findItem } from '@/data/contentMap'
import styles from './Breadcrumb.module.css'

export function Breadcrumb() {
  const { category, slug } = useParams()
  if (!category || !slug) return null

  const found = findItem(category, slug)
  if (!found) return null

  return (
    <nav className={styles.breadcrumb} aria-label="麵包屑">
      <Link to="/" className={styles.link}>
        首頁
      </Link>
      <span className={styles.sep}>/</span>
      <span className={styles.link}>{found.category.label}</span>
      <span className={styles.sep}>/</span>
      <span className={styles.current}>{found.item.title}</span>
    </nav>
  )
}
