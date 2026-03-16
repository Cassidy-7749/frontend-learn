import { MDXProvider as BaseMDXProvider } from '@mdx-js/react'
import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import { Callout } from '@/components/common/Callout'
import { CodePlayground } from '@/components/CodePlayground/CodePlayground'

const components = {
  Callout,
  CodePlayground,
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code {...props} />
  ),
}

export function MDXContent({ children }: { children: ReactNode }) {
  return <BaseMDXProvider components={components}>{children}</BaseMDXProvider>
}
