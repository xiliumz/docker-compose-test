import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const incrementCount = async () => {
  const response = await fetch(`api/db/increment`, {method: 'post'})

  if (response.status >= 400) alert('Failed')
  }

const getCount = async () => {
  const response = await fetch(`api/db`)

  if (response.status >= 400) alert('Failed')
  
  const data = await response.json()

  return data.count
}

function App() {
  const [count, setCount] = useState(0)


  console.log('the env is: ',import.meta.env)

  const increment = async () => {
    try {
      await incrementCount()
      const count = await getCount()

      setCount(count)
    } catch {
      alert('Failed')
    }
  }

  useEffect(() => {
    (async () => {
      const count = await getCount()

      setCount(count)
    })()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
