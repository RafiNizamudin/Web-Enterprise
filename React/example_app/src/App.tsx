import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log('UseEffect Called');
    return () => {
      console.log('Cleanup function Called');
    }
  }, [counter]);
  
  return(
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter+1)}>Tambah</button>
    </>
  )
}