import type { ContentCategory } from '@/types/content'

export const contentMap: ContentCategory[] = [
  {
    id: 'html',
    label: 'HTML',
    icon: '🏗',
    items: [
      {
        slug: 'semantic-elements',
        title: '基礎元素、屬性與語意化',
        description: 'HTML 元素、屬性系統與語意化標籤的正確用法',
        path: '/html/semantic-elements',
        component: () => import('@/content/html/semantic-elements.mdx'),
      },
      {
        slug: 'forms-validation',
        title: '表單與驗證',
        description: 'HTML 表單元素、原生驗證與自訂驗證',
        path: '/html/forms-validation',
        component: () => import('@/content/html/forms-validation.mdx'),
      },
      {
        slug: 'html5-api',
        title: 'HTML5 API',
        description: 'Canvas、Web Storage、Geolocation 等現代 API',
        path: '/html/html5-api',
        component: () => import('@/content/html/html5-api.mdx'),
      },
      {
        slug: 'accessibility',
        title: '無障礙（ARIA）',
        description: 'ARIA 屬性、螢幕閱讀器與無障礙最佳實踐',
        path: '/html/accessibility',
        component: () => import('@/content/html/accessibility.mdx'),
      },
      {
        slug: 'seo-basics',
        title: 'SEO 基礎',
        description: '搜尋引擎優化的基本概念與技巧',
        path: '/html/seo-basics',
        component: () => import('@/content/html/seo-basics.mdx'),
      },
      {
        slug: 'meta-og',
        title: 'Meta 標籤與 Open Graph',
        description: 'Meta 標籤、Open Graph 協議與社群分享優化',
        path: '/html/meta-og',
        component: () => import('@/content/html/meta-og.mdx'),
      },
    ],
  },
  {
    id: 'css',
    label: 'CSS',
    icon: '🎨',
    items: [
      {
        slug: 'selectors-specificity',
        title: '選擇器與優先級',
        description: 'CSS 選擇器種類與優先級計算規則',
        path: '/css/selectors-specificity',
        component: () => import('@/content/css/selectors-specificity.mdx'),
      },
      {
        slug: 'box-model',
        title: '盒模型',
        description: 'CSS 盒模型、margin 塌陷與 box-sizing',
        path: '/css/box-model',
        component: () => import('@/content/css/box-model.mdx'),
      },
      {
        slug: 'flexbox',
        title: 'Flexbox',
        description: 'Flexbox 彈性佈局完整指南',
        path: '/css/flexbox',
        component: () => import('@/content/css/flexbox.mdx'),
      },
      {
        slug: 'grid',
        title: 'Grid',
        description: 'CSS Grid 二維佈局系統',
        path: '/css/grid',
        component: () => import('@/content/css/grid.mdx'),
      },
      {
        slug: 'positioning',
        title: '定位（Positioning）',
        description: 'static、relative、absolute、fixed、sticky 定位',
        path: '/css/positioning',
        component: () => import('@/content/css/positioning.mdx'),
      },
      {
        slug: 'responsive-design',
        title: '響應式設計與 Media Queries',
        description: '響應式設計原則、Media Queries 與行動優先',
        path: '/css/responsive-design',
        component: () => import('@/content/css/responsive-design.mdx'),
      },
      {
        slug: 'animations',
        title: '動畫與過渡',
        description: 'CSS transition、animation 與效能優化',
        path: '/css/animations',
        component: () => import('@/content/css/animations.mdx'),
      },
      {
        slug: 'css-variables',
        title: 'CSS 變數',
        description: 'CSS Custom Properties 的用法與主題切換',
        path: '/css/css-variables',
        component: () => import('@/content/css/css-variables.mdx'),
      },
      {
        slug: 'preprocessors',
        title: '預處理器概念',
        description: 'SASS/Less 核心概念與使用場景',
        path: '/css/preprocessors',
        component: () => import('@/content/css/preprocessors.mdx'),
      },
      {
        slug: 'modern-css',
        title: '現代 CSS',
        description: 'Container Queries、:has()、Nesting 等新特性',
        path: '/css/modern-css',
        component: () => import('@/content/css/modern-css.mdx'),
      },
      {
        slug: 'bem-methodology',
        title: 'BEM 與 CSS 方法論',
        description: 'BEM 命名規範與 CSS 架構方法論',
        path: '/css/bem-methodology',
        component: () => import('@/content/css/bem-methodology.mdx'),
      },
    ],
  },
  {
    id: 'js',
    label: 'JavaScript',
    icon: '⚡',
    items: [
      {
        slug: 'data-types',
        title: '資料型別與型別轉換',
        description: '原始型別、物件型別與隱式/顯式轉換',
        path: '/js/data-types',
        component: () => import('@/content/js/data-types.mdx'),
      },
      {
        slug: 'scope-closure-hoisting',
        title: '作用域、閉包與提升',
        description: '理解 JavaScript 變數存取機制',
        path: '/js/scope-closure-hoisting',
        component: () => import('@/content/js/scope-closure-hoisting.mdx'),
      },
      {
        slug: 'this-keyword',
        title: 'this 關鍵字',
        description: 'this 的綁定規則與常見陷阱',
        path: '/js/this-keyword',
        component: () => import('@/content/js/this-keyword.mdx'),
      },
      {
        slug: 'prototype-inheritance',
        title: '原型與繼承',
        description: '原型鏈、繼承模式與 class 語法',
        path: '/js/prototype-inheritance',
        component: () => import('@/content/js/prototype-inheritance.mdx'),
      },
      {
        slug: 'es6-features',
        title: 'ES6+ 特性',
        description: '解構、展開、箭頭函式、Symbol、Iterator 等',
        path: '/js/es6-features',
        component: () => import('@/content/js/es6-features.mdx'),
      },
      {
        slug: 'promise-async',
        title: 'Promise 與 async/await',
        description: '非同步程式設計的核心概念',
        path: '/js/promise-async',
        component: () => import('@/content/js/promise-async.mdx'),
      },
      {
        slug: 'event-loop',
        title: '事件迴圈與微任務',
        description: 'Event Loop、macrotask、microtask 執行順序',
        path: '/js/event-loop',
        component: () => import('@/content/js/event-loop.mdx'),
      },
      {
        slug: 'dom-manipulation',
        title: 'DOM 操作',
        description: 'DOM 查詢、修改、建立與效能優化',
        path: '/js/dom-manipulation',
        component: () => import('@/content/js/dom-manipulation.mdx'),
      },
      {
        slug: 'event-delegation',
        title: '事件委派與冒泡',
        description: '事件傳播機制與委派模式',
        path: '/js/event-delegation',
        component: () => import('@/content/js/event-delegation.mdx'),
      },
      {
        slug: 'fetch-ajax',
        title: 'Fetch API 與 AJAX',
        description: '網路請求的現代方法',
        path: '/js/fetch-ajax',
        component: () => import('@/content/js/fetch-ajax.mdx'),
      },
      {
        slug: 'error-handling',
        title: '錯誤處理',
        description: 'try/catch、自訂錯誤與全域錯誤處理',
        path: '/js/error-handling',
        component: () => import('@/content/js/error-handling.mdx'),
      },
      {
        slug: 'module-system',
        title: '模組系統',
        description: 'ESM vs CommonJS 模組系統',
        path: '/js/module-system',
        component: () => import('@/content/js/module-system.mdx'),
      },
      {
        slug: 'regex',
        title: '正則表達式',
        description: '正則語法、常用模式與實戰範例',
        path: '/js/regex',
        component: () => import('@/content/js/regex.mdx'),
      },
      {
        slug: 'web-apis',
        title: 'Web API',
        description: 'IntersectionObserver、MutationObserver 等',
        path: '/js/web-apis',
        component: () => import('@/content/js/web-apis.mdx'),
      },
      {
        slug: 'design-patterns',
        title: '設計模式',
        description: '常見 JavaScript 設計模式',
        path: '/js/design-patterns',
        component: () => import('@/content/js/design-patterns.mdx'),
      },
      {
        slug: 'memory-management',
        title: '記憶體管理與垃圾回收',
        description: '記憶體生命週期與常見洩漏',
        path: '/js/memory-management',
        component: () => import('@/content/js/memory-management.mdx'),
      },
      {
        slug: 'performance',
        title: '效能優化',
        description: '前端效能優化策略與實踐',
        path: '/js/performance',
        component: () => import('@/content/js/performance.mdx'),
      },
      {
        slug: 'interview-questions',
        title: '常見面試題',
        description: 'JavaScript 經典面試題解析',
        path: '/js/interview-questions',
        component: () => import('@/content/js/interview-questions.mdx'),
      },
    ],
  },
]

export function getAllItems() {
  return contentMap.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat }))
  )
}

export function findItem(categoryId: string, slug: string) {
  const category = contentMap.find((c) => c.id === categoryId)
  if (!category) return null
  const item = category.items.find((i) => i.slug === slug)
  if (!item) return null
  return { item, category }
}

export function getAdjacentItems(categoryId: string, slug: string) {
  const all = getAllItems()
  const index = all.findIndex(
    (i) => i.category.id === categoryId && i.slug === slug
  )
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 ? all[index + 1] : null,
  }
}
