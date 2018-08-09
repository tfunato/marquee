const express = require('express')
const sum = require('./handler/sum')
const sub = require('./handler/sub')
const multi = require('./handler/multi')
const div = require('./handler/div')
const validator = require('./middleware/commonValidate')
const app = express()

app.get('/status', (requ, res, next) => {
  res.status(200)
  res.send('OK')
})

app.get('/sum', validator, sum)
app.get('/sub', validator, sub)
app.get('/multi', validator, multi)
app.get('/div', validator, div)
app.get('/', (requ, res, next) => {
  res.status(200)
  res.send('Hello Marquee')
})
app.use((req, res, next) => {
  res.status(404)
  res.send('Not Found')
})
app.listen(3000)
