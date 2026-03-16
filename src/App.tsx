import { HashRouter, Routes, Route } from 'react-router'
import { Layout } from '@/components/Layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ArticlePage } from '@/components/Content/ArticlePage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":category/:slug" element={<ArticlePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
