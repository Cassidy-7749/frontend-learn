import { Link, useOutletContext } from 'react-router'
import { contentMap, getAllItems } from '@/data/contentMap'
import styles from './HomePage.module.css'

interface OutletContext {
  isCompleted: (path: string) => boolean
  completedCount: number
}

export function HomePage() {
  const { isCompleted, completedCount } = useOutletContext<OutletContext>()
  const totalItems = getAllItems().length
  const percent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>前端知識複習</h1>
        <p className={styles.subtitle}>
          涵蓋 HTML、CSS、JavaScript 核心知識，搭配互動式程式碼編輯器，邊學邊練。
        </p>
        <div className={styles.progressSection}>
          <div className={styles.progressInfo}>
            <span>學習進度</span>
            <span>
              {completedCount} / {totalItems} 篇 ({percent}%)
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        {contentMap.map((category) => {
          const done = category.items.filter((i) =>
            isCompleted(i.path)
          ).length
          return (
            <div key={category.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{category.icon}</span>
                <h2 className={styles.cardTitle}>{category.label}</h2>
                <span className={styles.cardCount}>
                  {done}/{category.items.length}
                </span>
              </div>
              <ul className={styles.cardList}>
                {category.items.map((item) => (
                  <li key={item.slug}>
                    <Link to={item.path} className={styles.cardLink}>
                      <span className={styles.cardCheck}>
                        {isCompleted(item.path) ? '✓' : '○'}
                      </span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>
    </div>
  )
}
