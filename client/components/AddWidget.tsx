import { addNewWidget } from '../apiClient'
import { NewWidget } from '../../models/Widget'

interface Props {
  reloadWidgets: () => void
}

function AddWidget(props: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.currentTarget
    const form = new FormData(target)
    const name = form.get('name')?.valueOf() as string
    const price = form.get('price')?.valueOf() as number
    const mfg = form.get('mfg')?.valueOf() as string
    const inStock = form.get('inStock')?.valueOf() as number

    const newWidget: NewWidget = {
      name,
      price,
      mfg,
      inStock,
    }
    addNewWidget(newWidget)
    console.log(newWidget)

    props.reloadWidgets()
  }

  return (
    <>
      <div>
        <form className="widget" onSubmit={handleSubmit}>
          <h3>Add New Widget:</h3>

          <label htmlFor="name">Name:</label>
          <input id="name" name="name" />

          <label htmlFor="price">Price:</label>
          <input id="price" type="number" name="price" />

          <label htmlFor="mfg">Manufacturer:</label>
          <input id="mfg" name="mfg" />

          <label htmlFor="inStock">No. In Stock:</label>
          <input id="inStock" type="number" name="inStock" />
          <div className="addButton">
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddWidget
