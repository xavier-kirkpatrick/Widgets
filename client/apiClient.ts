/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets'

export async function getWidgets() {
  const res = await request.get(widgetUrl)
  // console.log('api res:', res)
  // console.log('api res.body', res.body)
  return res.body
}

export async function deleteWidgetById(id: number) {
  await request.delete(`${widgetUrl}/${id}`)
}

export async function addNewWidget(newWidget: NewWidget) {
  await request.post(widgetUrl).send(newWidget)
}
