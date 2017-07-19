import ping from './ping'

export default app => {
  app.get('/api/ping', ping.list)

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(err.stack || err) // eslint-disable-line no-console

    if (err) {
      res.sendStatus(500)
    }
  })
}
