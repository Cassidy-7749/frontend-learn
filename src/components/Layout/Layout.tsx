import { Outlet } from 'react-router'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { useTheme } from '@/hooks/useTheme'
import { useSidebar } from '@/hooks/useSidebar'
import { useProgress } from '@/hooks/useProgress'
import { useState, useEffect } from 'react'
import { SearchModal } from '@/components/Search/SearchModal'
import styles from './Layout.module.css'
import clsx from 'clsx'

export function Layout() {
  const { theme, toggleTheme } = useTheme()
  const { isOpen, toggle, close } = useSidebar()
  const { isCompleted, toggleProgress, completedCount } = useProgress()
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className={styles.layout}>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleSidebar={toggle}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <Sidebar isOpen={isOpen} isCompleted={isCompleted} onClose={close} />
      <main className={clsx(styles.main, !isOpen && styles.mainFull)}>
        <Outlet context={{ isCompleted, toggleProgress, completedCount }} />
      </main>
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
