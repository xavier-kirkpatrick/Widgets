import { Widget } from '../../models/Widget'

interface Props {
  widgets: Widget[]
}

function Widgets(props: Props) {
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
          <button className="delete-button">Delete</button>
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