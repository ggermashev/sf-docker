import express from 'express'
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello from node.js!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})