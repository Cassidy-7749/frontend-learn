import { ThemeToggle } from '@/components/common/ThemeToggle'
import styles from './Header.module.css'

interface Props {
  theme: string
  onToggleTheme: () => void
  onToggleSidebar: () => void
  onOpenSearch: () => void
}

export function Header({
  theme,
  onToggleTheme,
  onToggleSidebar,
  onOpenSearch,
}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          className={styles.hamburger}
          onClick={onToggleSidebar}
          aria-label="切換側邊欄"
        >
          <span />
          <span />
          <span />
        </button>
        <a href="/" className={styles.logo}>
          📚 前端知識複習
        </a>
      </div>
      <div className={styles.right}>
        <button className={styles.searchBtn} onClick={onOpenSearch}>
          <span className={styles.searchIcon}>🔍</span>
          <span className={styles.searchText}>搜尋...</span>
          <kbd className={styles.kbd}>⌘K</kbd>
        </button>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
