import { useEffect, useRef } from 'react'
import styles from './CodePlayground.module.css'

interface Props {
  srcdoc: string
  onConsoleMessage: (msg: { type: string; args: string[] }) => void
}

export function PreviewPanel({ srcdoc, onConsoleMessage }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.source === 'playground') {
        onConsoleMessage({ type: e.data.type, args: e.data.args })
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [onConsoleMessage])

  return (
    <iframe
      ref={iframeRef}
      className={styles.iframe}
      sandbox="allow-scripts"
      srcDoc={srcdoc}
      title="預覽"
    />
  )
}
