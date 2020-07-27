import fastify from 'fastify'
import xml from 'object-to-xml'

import UfscSercice from '@services/ufsc'
import { convertHTMLToDom, mapAds } from '@helpers/index'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const app = fastify({
  logger: false
})

app.get('/', async (_, reply) => {
  const UFSC = new UfscSercice()
  const { data } = await UFSC.getAll()
  const $ = convertHTMLToDom(data)
  const ads = mapAds($)

  reply.type('text/xml')
  reply.send(xml(ads))
})

export default app
