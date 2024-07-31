import { Collection } from 'signaldb'
import maverickReactivityAdapter from 'signaldb-plugin-maverickjs'

const Categories = new Collection({
  reactivity: maverickReactivityAdapter,
})

export default Categories