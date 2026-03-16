import type { ReactNode } from 'react'
import styles from './Callout.module.css'
import clsx from 'clsx'

interface Props {
  type?: 'info' | 'warning' | 'error' | 'tip'
  title?: string
  children: ReactNode
}

const icons: Record<string, string> = {
  info: 'ℹ️',
  warning: '⚠️',
  error: '❌',
  tip: '💡',
}

export function Callout({ type = 'info', title, children }: Props) {
  return (
    <div className={clsx(styles.callout, styles[type])}>
      <div className={styles.header}>
        <span className={styles.icon}>{icons[type]}</span>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}
