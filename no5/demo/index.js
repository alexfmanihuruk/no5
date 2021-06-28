const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  var ip = req.headers['x-real-ip'] || req.connection.remoteAddress.split(':').pop();
  console.log(`come from ${ip}`)
  res.send(ip)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
