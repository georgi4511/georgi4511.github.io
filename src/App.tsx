import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const CounterAdd = () => {
    let curr = count;
    setCount(curr++)
  }

  return (
    <>
      <div>
        Testing building and functionality
      </div>
      <button onClick={CounterAdd}>{count}</button>
    </>
  )


}

export default App
