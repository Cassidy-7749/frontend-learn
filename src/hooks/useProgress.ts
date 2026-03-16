import { useState, useCallback } from 'react'

const STORAGE_KEY = 'learning-progress'

function loadProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress)

  const toggleProgress = useCallback((path: string) => {
    setProgress((prev) => {
      const next = { ...prev, [path]: !prev[path] }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const isCompleted = useCallback(
    (path: string) => !!progress[path],
    [progress]
  )

  const completedCount = Object.values(progress).filter(Boolean).length

  return { progress, toggleProgress, isCompleted, completedCount }
}
