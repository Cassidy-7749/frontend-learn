# 📚 前端知識複習

一個文件式的前端知識複習網站，涵蓋 HTML、CSS、JavaScript 核心三件套的完整知識體系，並內嵌互動式程式碼編輯器，讓你邊學邊練。

🔗 **線上預覽**：https://cassidy-7749.github.io/frontend-learn/

## 功能特色

- **35 篇完整文章** — HTML (6)、CSS (11)、JavaScript (18)
- **互動式 CodePlayground** — 內嵌 CodeMirror 6 編輯器 + iframe 沙箱即時預覽
- **Console 面板** — 攔截 iframe 內的 console 輸出，方便除錯
- **學習進度追蹤** — localStorage 持久化，側邊欄 / 首頁顯示完成進度
- **全文搜尋** — FlexSearch 客戶端搜尋，支援 Cmd+K / Ctrl+K 快捷鍵
- **亮 / 暗主題** — CSS Custom Properties 實現，自動偵測系統偏好
- **響應式設計** — 桌面 / 平板 / 手機自適應佈局
- **文章目錄** — IntersectionObserver 驅動的側邊目錄高亮
- **前後篇導覽** — 文章底部自動產生上一篇 / 下一篇連結

## 技術棧

| 項目 | 選擇 |
|------|------|
| 框架 | React + Vite + TypeScript |
| 內容格式 | MDX (Markdown + React) |
| 路由 | React Router v7 |
| 程式碼編輯器 | CodeMirror 6 (`@uiw/react-codemirror`) |
| 程式碼執行 | iframe `srcdoc` 沙箱 |
| 樣式 | CSS Modules + CSS Custom Properties |
| 搜尋 | FlexSearch (客戶端) |
| 部署 | GitHub Pages |

## 文章列表

### HTML（6 篇）
1. 基礎元素、屬性與語意化
2. 表單與驗證
3. HTML5 API
4. 無障礙（ARIA）
5. SEO 基礎
6. Meta 標籤與 Open Graph

### CSS（11 篇）
1. 選擇器與優先級
2. 盒模型
3. Flexbox
4. Grid
5. 定位（Positioning）
6. 響應式設計與 Media Queries
7. 動畫與過渡
8. CSS 變數
9. 預處理器概念
10. 現代 CSS
11. BEM 與 CSS 方法論

### JavaScript（18 篇）
1. 資料型別與型別轉換
2. 作用域、閉包與提升
3. this 關鍵字
4. 原型與繼承
5. ES6+ 特性
6. Promise 與 async/await
7. 事件迴圈與微任務
8. DOM 操作
9. 事件委派與冒泡
10. Fetch API 與 AJAX
11. 錯誤處理
12. 模組系統
13. 正則表達式
14. Web API
15. 設計模式
16. 記憶體管理與垃圾回收
17. 效能優化
18. 常見面試題

## 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置
npm run build
```

## 授權

MIT
