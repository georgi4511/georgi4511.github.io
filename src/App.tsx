import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const CounterAdd = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        Testing building and functionality
      </div>
      <div>a</div>   <button onClick={CounterAdd}>{count}</button>

    </>
  )


}

export default App
