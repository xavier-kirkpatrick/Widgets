/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'

const widgetUrl = '/api/v1/widgets'

export async function getWidgets() {
  const res = await request.get(widgetUrl)
  // console.log('api res:', res)
  // console.log('api res.body', res.body)
  return res.body
}

export async function deleteWidgetById(id) {
  await request.delete(`${widgetUrl}/${id}`)
}
