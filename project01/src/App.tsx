import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-w-screen min-h-screen">
      <div>
        <h1 className='m-auto text-center mt-4 text-3xl font-bold text-white'>LOGIN</h1>
      </div>
      <div>
        <div>
          <p>
            Email
          </p>
          <input type="email" />
        </div>
        <div>
          <p>
            Password
          </p>
          <input type="password" name="" id="" />
        </div>
      </div>
    </div>
  )
}

export default App
