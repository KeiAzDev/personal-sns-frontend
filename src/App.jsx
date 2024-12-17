import { useState } from 'react'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  const [count, setCount] = useState(0)

  return <Home />
}

export default App
