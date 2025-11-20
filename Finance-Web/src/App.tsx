import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/sf.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="w-screen h-screen p-4">
      <div>
        <h1 className='h-1/6 m-auto text-center text-3xl font-bold text-white'>LOGIN</h1>
      </div>
      <div className='h-5/6 flex flex-col justify-center'>
        <div className='bg-white h-2/5 w-80 md:w-2/6 md:h-1/3 m-auto rounded-lg flex flex-col justify-center'>{/*div-botao*/}
        <div className='text-center'>{/*div-email*/}
          <p>
            Email
          </p>
          <input type="email" className='
          bg-gray-200 
          rounded-sm 
          w-5/6 sm:w-10/12 lg:w-8/12 xl:w-1/2
          mb-2.5'/>
        </div>





        
        <div className='text-center'>{/*div-senha*/}
          <p>
            Password
          </p>
          <input type="password" className='bg-gray-200 rounded-sm w-5/6 md:w-1/2 mb-2.5'/>
        </div> 
        <div className='text-center'>{/*div-botao*/}
          <button className='bg-blue-100 pt-1 pb-1 pl-2.5 pr-2.5 mt-2.5 rounded-sm'>enviar</button>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default App
