import CodeMirror from '@uiw/react-codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import type { Extension } from '@codemirror/state'

interface Props {
  value: string
  language: 'html' | 'css' | 'javascript'
  onChange: (value: string) => void
  theme?: 'light' | 'dark'
}

const langExtensions: Record<string, () => Extension> = {
  html: () => html(),
  css: () => css(),
  javascript: () => javascript(),
}

export function EditorPanel({ value, language, onChange, theme = 'light' }: Props) {
  return (
    <CodeMirror
      value={value}
      height="100%"
      theme={theme === 'dark' ? 'dark' : 'light'}
      extensions={[langExtensions[language]()]}
      onChange={onChange}
      basicSetup={{
        lineNumbers: true,
        foldGutter: true,
        bracketMatching: true,
        autocompletion: true,
      }}
      style={{ fontSize: '14px', height: '100%' }}
    />
  )
}
