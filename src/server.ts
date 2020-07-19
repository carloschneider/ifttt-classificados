import server from './'

const port = Number(process.env.PORT) || 3000

server.listen(port, (error, address) => {
  if (error) {
    server.log.error(error)
    process.exit(1)
  }

  server.log.info(`server listening on ${address}`)
})
