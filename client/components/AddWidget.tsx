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
      <div className="widget">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input id="price" type="number" name="price" />
          </div>
          <div>
            <label htmlFor="mfg">Manufacturer:</label>
            <input id="mfg" name="mfg" />
          </div>
          <div>
            <label htmlFor="inStock">No. In Stock:</label>
            <input id="inStock" type="number" name="inStock" />
          </div>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}

export default AddWidget
