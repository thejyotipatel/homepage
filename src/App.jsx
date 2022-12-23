import { useState } from 'react'
import Header from './components/header'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Home />
    </div>
  )
}

export default App
