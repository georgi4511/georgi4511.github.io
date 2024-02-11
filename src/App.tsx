import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const CounterAdd = () => {
    setCount(count + 1)
  }

  return (
    <>
      <img alt='sprite_image' src="src/assets/sprite.png"></img>
      <div>
        Testing building and functionality
      </div>
      <hr></hr>
      <button onClick={CounterAdd}>{count}</button>

    </>
  )


}

export default App
