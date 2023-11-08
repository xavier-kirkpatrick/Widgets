import { useState, useEffect } from 'react'
import { Widget } from '../../models/Widget'
import { getWidgets } from '../apiClient'
import Widgets from './Widget'
import AddWidget from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Widget[])

  useEffect(() => {
    reloadWidgets()
  }, [])

  function reloadWidgets() {
    getWidgets()
      .then((widget) => {
        setWidgets(widget)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <Widgets widgets={widgets} reloadWidgets={reloadWidgets} />
      <AddWidget reloadWidgets={reloadWidgets} />
    </div>
  )
}

export default App
