import connection from './connection.ts'

import { Widget, NewWidget } from '../../models/Widget.ts'
import Widgets from '../../client/components/Widget.tsx'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function deleteWidget(id: number, db = connection) {
  return db('widgets').where('id', id).delete()
}

export function addWidget(newWidget: NewWidget, db = connection) {
  return db('widgets').insert(newWidget)
}
