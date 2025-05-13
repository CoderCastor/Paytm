import { MainRouter } from "./Router"
import { useState} from 'react'

function App() {
  
  const [state ,setState] = useState(null)
  
  return (
    <div className="">
      <MainRouter/>
    </div>
  )
}

export default App
