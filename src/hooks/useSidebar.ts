import { useState, useCallback, useEffect } from 'react'

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])
  const close = useCallback(() => setIsOpen(false), [])

  return { isOpen, toggle, close }
}
