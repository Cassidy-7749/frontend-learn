import { Suspense, lazy, useEffect, useState } from 'react'
import { useParams, useOutletContext, Link } from 'react-router'
import { findItem, getAdjacentItems } from '@/data/contentMap'
import { Breadcrumb } from '@/components/Layout/Breadcrumb'
import { TableOfContents } from './TableOfContents'
import { ProgressBadge } from '@/components/common/ProgressBadge'
import { MDXContent } from './MDXProvider'
import styles from './ArticlePage.module.css'
import type { ComponentType } from 'react'

interface OutletContext {
  isCompleted: (path: string) => boolean
  toggleProgress: (path: string) => void
}

export function ArticlePage() {
  const { category, slug } = useParams()
  const { isCompleted, toggleProgress } = useOutletContext<OutletContext>()
  const [Component, setComponent] = useState<ComponentType | null>(null)

  const found = category && slug ? findItem(category, slug) : null
  const adjacent =
    category && slug ? getAdjacentItems(category, slug) : { prev: null, next: null }

  useEffect(() => {
    if (!found) return
    setComponent(null)
    const LazyComponent = lazy(found.item.component)
    setComponent(() => LazyComponent)
  }, [found?.item.path])

  if (!found) {
    return (
      <div className={styles.notFound}>
        <h1>404</h1>
        <p>找不到此文章</p>
        <Link to="/">返回首頁</Link>
      </div>
    )
  }

  const currentPath = found.item.path

  return (
    <div className={styles.page}>
      <article className="article-content">
        <Breadcrumb />
        <div className={styles.titleRow}>
          <h1>{found.item.title}</h1>
          <ProgressBadge
            completed={isCompleted(currentPath)}
            onClick={() => toggleProgress(currentPath)}
          />
        </div>
        <p className={styles.description}>{found.item.description}</p>
        <hr />
        <MDXContent>
          <Suspense fallback={<div className={styles.loading}>載入中...</div>}>
            {Component && <Component />}
          </Suspense>
        </MDXContent>
        <nav className={styles.nav}>
          {adjacent.prev && (
            <Link to={adjacent.prev.path} className={styles.navPrev}>
              <span className={styles.navLabel}>上一篇</span>
              <span className={styles.navTitle}>{adjacent.prev.title}</span>
            </Link>
          )}
          {adjacent.next && (
            <Link to={adjacent.next.path} className={styles.navNext}>
              <span className={styles.navLabel}>下一篇</span>
              <span className={styles.navTitle}>{adjacent.next.title}</span>
            </Link>
          )}
        </nav>
      </article>
      <aside className={styles.tocWrapper}>
        <TableOfContents />
      </aside>
    </div>
  )
}
