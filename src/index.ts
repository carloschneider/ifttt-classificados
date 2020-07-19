import fastify from 'fastify'

import UfscSercice from './services/ufsc'
import { convertHTMLToDom, mapAds } from './helpers/'

const server = fastify({
  logger: false
})

server.get('/', async (_, reply) => {
  const UFSC = new UfscSercice()
  console.log(UFSC.getAll());

  // const { data } = await UFSC.getAll()

  // const $ = convertHTMLToDom(data)
  // const ads = mapAds($)

  reply.send('Hello world')
})

export default server
