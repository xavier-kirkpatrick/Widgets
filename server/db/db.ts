import connection from './connection.ts'

import { Widget } from '../../models/Widget.ts'
import Widgets from '../../client/components/Widget.tsx'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function deleteWidget(id: number, db = connection) {
  return db('widgets').where('id', id).delete()
}
