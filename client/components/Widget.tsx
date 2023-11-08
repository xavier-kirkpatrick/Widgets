import { Widget } from '../../models/Widget'
import { deleteWidgetById } from '../apiClient'

interface Props {
  widgets: Widget[]
  reloadWidgets: () => void
}

function Widgets(props: Props) {
  async function handleClick(id: number) {
    await deleteWidgetById(id)
    props.reloadWidgets()
  }

  return (
    <ul>
      {props.widgets.map((widget) => (
        <div className={widget.name} key={widget.id}>
          <h3>{widget.name}</h3>
          <ul>
            <li>Stock: {widget.inStock}</li>
            <li>Manufacturer: {widget.mfg}</li>
            <li>Price ${widget.price}</li>
          </ul>
          <button
            onClick={() => handleClick(widget.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  )
}

export default Widgets

{
  /* <li key={widget.id}>
      {`${widget.id}: 
      ${widget.name} - 
      ${widget.inStock}, 
      ${widget.mfg}, 
      $${widget.price}`}
    </li> */
}
