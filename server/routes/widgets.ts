import express from 'express'
import { deleteWidget, getWidgets } from '../db/db.ts'

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
export default router
