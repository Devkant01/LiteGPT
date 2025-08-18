import { useState } from 'react'
import Router from './Routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
      <Router />
    </main>
  )
}

export default App
