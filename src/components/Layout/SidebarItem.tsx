import { NavLink } from 'react-router'
import styles from './Sidebar.module.css'
import type { ContentItem } from '@/types/content'
import clsx from 'clsx'

interface Props {
  item: ContentItem
  isCompleted: boolean
  onClick?: () => void
}

export function SidebarItem({ item, isCompleted, onClick }: Props) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        clsx(styles.item, isActive && styles.itemActive)
      }
      onClick={onClick}
    >
      <span className={styles.itemCheck}>
        {isCompleted ? '✓' : '○'}
      </span>
      <span className={styles.itemTitle}>{item.title}</span>
    </NavLink>
  )
}
