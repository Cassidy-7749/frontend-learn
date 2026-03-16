import { useState, useCallback } from 'react'
import { EditorPanel } from './EditorPanel'
import { PreviewPanel } from './PreviewPanel'
import { ConsolePanel, type ConsoleMessage } from './ConsolePanel'
import { buildSrcdoc } from './iframeTemplate'
import styles from './CodePlayground.module.css'
import clsx from 'clsx'

interface Props {
  defaultHTML?: string
  defaultCSS?: string
  defaultJS?: string
  title?: string
}

type Tab = 'html' | 'css' | 'javascript'
type ViewTab = 'preview' | 'console'

export function CodePlayground({
  defaultHTML = '',
  defaultCSS = '',
  defaultJS = '',
  title,
}: Props) {
  const [htmlCode, setHtmlCode] = useState(defaultHTML.trim())
  const [cssCode, setCssCode] = useState(defaultCSS.trim())
  const [jsCode, setJsCode] = useState(defaultJS.trim())
  const [activeTab, setActiveTab] = useState<Tab>(() => {
    if (defaultHTML) return 'html'
    if (defaultCSS) return 'css'
    return 'javascript'
  })
  const [viewTab, setViewTab] = useState<ViewTab>('preview')
  const [messages, setMessages] = useState<ConsoleMessage[]>([])
  const [srcdoc, setSrcdoc] = useState(() =>
    buildSrcdoc(defaultHTML.trim(), defaultCSS.trim(), defaultJS.trim())
  )

  const theme =
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'

  const run = useCallback(() => {
    setMessages([])
    setSrcdoc(buildSrcdoc(htmlCode, cssCode, jsCode))
  }, [htmlCode, cssCode, jsCode])

  const handleConsole = useCallback((msg: ConsoleMessage) => {
    setMessages((prev) => [...prev, msg])
  }, [])

  const editorValue =
    activeTab === 'html' ? htmlCode : activeTab === 'css' ? cssCode : jsCode
  const editorOnChange =
    activeTab === 'html' ? setHtmlCode : activeTab === 'css' ? setCssCode : setJsCode

  const tabs: { key: Tab; label: string }[] = []
  if (defaultHTML !== undefined) tabs.push({ key: 'html', label: 'HTML' })
  if (defaultCSS !== undefined) tabs.push({ key: 'css', label: 'CSS' })
  if (defaultJS !== undefined) tabs.push({ key: 'javascript', label: 'JS' })

  return (
    <div className={styles.playground}>
      {title && <div className={styles.playgroundTitle}>{title}</div>}
      <div className={styles.container}>
        <div className={styles.editorSection}>
          <div className={styles.tabs}>
            {tabs.map((t) => (
              <button
                key={t.key}
                className={clsx(styles.tab, activeTab === t.key && styles.tabActive)}
                onClick={() => setActiveTab(t.key)}
              >
                {t.label}
              </button>
            ))}
            <button className={styles.runBtn} onClick={run}>
              ▶ 執行
            </button>
          </div>
          <div className={styles.editorWrapper}>
            <EditorPanel
              value={editorValue}
              language={activeTab}
              onChange={editorOnChange}
              theme={theme}
            />
          </div>
        </div>
        <div className={styles.outputSection}>
          <div className={styles.tabs}>
            <button
              className={clsx(
                styles.tab,
                viewTab === 'preview' && styles.tabActive
              )}
              onClick={() => setViewTab('preview')}
            >
              預覽
            </button>
            <button
              className={clsx(
                styles.tab,
                viewTab === 'console' && styles.tabActive
              )}
              onClick={() => setViewTab('console')}
            >
              Console{messages.length > 0 && ` (${messages.length})`}
            </button>
          </div>
          <div className={styles.outputContent}>
            {viewTab === 'preview' ? (
              <PreviewPanel srcdoc={srcdoc} onConsoleMessage={handleConsole} />
            ) : (
              <ConsolePanel
                messages={messages}
                onClear={() => setMessages([])}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
