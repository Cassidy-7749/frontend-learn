import styles from './CodePlayground.module.css'
import clsx from 'clsx'

export interface ConsoleMessage {
  type: string
  args: string[]
}

interface Props {
  messages: ConsoleMessage[]
  onClear: () => void
}

export function ConsolePanel({ messages, onClear }: Props) {
  return (
    <div className={styles.console}>
      <div className={styles.consoleHeader}>
        <span>Console</span>
        <button onClick={onClear} className={styles.clearBtn}>
          清除
        </button>
      </div>
      <div className={styles.consoleBody}>
        {messages.length === 0 && (
          <div className={styles.consolePlaceholder}>
            Console 輸出會顯示在這裡...
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={clsx(
              styles.consoleLine,
              msg.type === 'error' && styles.consoleError,
              msg.type === 'warn' && styles.consoleWarn
            )}
          >
            {msg.args.join(' ')}
          </div>
        ))}
      </div>
    </div>
  )
}
