import { useState, useEffect } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'

function App() {
  const [usualState, setUsualState] = useState([] as Widget[])

  useEffect(() => {
    console.log('using the effect')
    getWidgets()
      .then((widget) => {
        setUsualState(widget)
      })
      .catch((err) => console.error(err))
  }, [])

  getWidgets()

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {usualState.map((widget) => (
          <li key={widget.id}>
            {widget.id}
            {widget.name}
            {widget.inStock}
            {widget.mfg}
            {widget.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
