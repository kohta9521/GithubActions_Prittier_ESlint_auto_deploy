import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './App.css'
import ComicContext from './index'

function App() {
  // useState
  const [count, setCount] = useState(0)

  // context
  const comicInfo = useContext(ComicContext)

  // handleClick function
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  // useEffect
  useEffect(() => {
    console.log('Hello useeffect!!!')
  }, [count])

  return (
    <div className="App">
      <h1>useState</h1>
      <button onClick={handleClick}>count is {count}</button>
      <p>{comicInfo.title}</p>
      <p>{comicInfo.author}</p>
    </div>
  )
}

export default App
