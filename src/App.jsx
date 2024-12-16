import { useState } from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

function App() {
  const [count, setCount] = useState(0)

  return <Profile />
}

export default App
