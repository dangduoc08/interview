const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
const cors = require('cors')
const { largeArray } = require('./large-array')

const PORT = 4040

const app = express()
app.use(
  morgan('dev'),
  express.urlencoded({ extended: false }),
  express.json(),
  cors()
)

app.get('/users', async (req, res) => {
  try {
    const { data } = await axios.get('https://randomuser.me/api/?results=10')
    res.json(data.results)
  } catch (err) {
    res.send(err.message)
  }
})


app.get('/sum', (req, res) => {
  // Sum = 524.994.750.000

  try {
    const now = new Date()
    const sumResult = largeArray.reduce((acc, cur, index) => {
      if (index % 50 === 0) {
        console.log(index)
      }

      return acc += cur
    }, 0)

    res.json({
      spent: new Date() - now + 'ms',
      sum: sumResult
    })
  } catch (err) {
    res.send(err.message)
  }
})


const server = app.listen(PORT)

server.on('listening', () => console.log(`server connect on port ${PORT}`))
server.on('error', err => console.error(err))
