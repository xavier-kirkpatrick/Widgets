import { useState, useEffect } from 'react'
import { Widget } from '../../models/Widget'

function App() {
  const [usualState, setUsualState] = useState([] as Widget[])

  useEffect(() => {
    setUsualState(console.log('using the effect'))
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
