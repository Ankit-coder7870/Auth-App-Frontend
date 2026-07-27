import { useState } from 'react'

import './App.css'
import {Button} from "./components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello Auth Frontend</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App
