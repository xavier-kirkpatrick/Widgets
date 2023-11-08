import express from 'express'
import { addWidget, deleteWidget, getWidgets } from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      console.log(widgets)
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', async (req, res) => {
  try {
    const deleteId = Number(req.params.id)
    await deleteWidget(deleteId)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const newWidget = req.body
    await addWidget(newWidget)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
  }
})

export default router
