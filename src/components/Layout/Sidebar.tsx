import { contentMap } from '@/data/contentMap'
import { SidebarItem } from './SidebarItem'
import styles from './Sidebar.module.css'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  isOpen: boolean
  isCompleted: (path: string) => boolean
  onClose: () => void
}

export function Sidebar({ isOpen, isCompleted, onClose }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(contentMap.map((c) => [c.id, true]))
  )

  const toggleCategory = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <>
      {isOpen && isMobile && (
        <div className={styles.overlay} onClick={onClose} />
      )}
      <aside className={clsx(styles.sidebar, !isOpen && styles.hidden)}>
        <nav className={styles.nav}>
          {contentMap.map((category) => {
            const completedCount = category.items.filter((i) =>
              isCompleted(i.path)
            ).length
            return (
              <div key={category.id} className={styles.category}>
                <button
                  className={styles.categoryHeader}
                  onClick={() => toggleCategory(category.id)}
                >
                  <span>
                    {category.icon} {category.label}
                  </span>
                  <span className={styles.counter}>
                    {completedCount}/{category.items.length}
                  </span>
                </button>
                {expanded[category.id] && (
                  <div className={styles.categoryItems}>
                    {category.items.map((item) => (
                      <SidebarItem
                        key={item.slug}
                        item={item}
                        isCompleted={isCompleted(item.path)}
                        onClick={isMobile ? onClose : undefined}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
