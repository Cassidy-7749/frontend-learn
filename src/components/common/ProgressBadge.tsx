import styles from './ProgressBadge.module.css'
import clsx from 'clsx'

interface Props {
  completed: boolean
  onClick: () => void
}

export function ProgressBadge({ completed, onClick }: Props) {
  return (
    <button
      className={clsx(styles.badge, completed && styles.completed)}
      onClick={onClick}
      aria-label={completed ? '標記為未完成' : '標記為已學會'}
    >
      {completed ? '✓ 已學會' : '○ 標記學會'}
    </button>
  )
}
