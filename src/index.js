import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const comicInfo = {
  title: '呪術廻戦',
  author: '作者不詳',
}

// グローバルに管理したいcontextを生成
const ComicContext = createContext(comicInfo)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ComicContext.Provider value={comicInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ComicContext.Provider>,
)

export default ComicContext
