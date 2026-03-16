import styles from './ThemeToggle.module.css'

interface Props {
  theme: string
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: Props) {
  return (
    <button
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`切換至${theme === 'light' ? '深色' : '淺色'}模式`}
      title={`切換至${theme === 'light' ? '深色' : '淺色'}模式`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
