import { useState } from 'react'
import './App.css'
import imgUrl from './images/sprite.png'

function App() {


  const [count, setCount] = useState(0)

  const CounterAdd = () => {
    setCount(count + 1)
  }

  return (
    <>
      <img alt='sprite_image' src={imgUrl} id='sprite_image'></img>
      <div>
        Testing building and functionality
      </div>
      <hr></hr>
      <button onClick={CounterAdd}>{count}</button>

    </>
  )


}

export default App
