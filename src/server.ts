import app from './app'

const port = Number(process.env.PORT) || 3000

app.listen(port, (error, address) => {
  if (error) {
    app.log.error(error)
    process.exit(1)
  }

  app.log.info(`server listening on ${address}`)
})
