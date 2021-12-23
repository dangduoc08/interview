const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
const cors = require('cors')

const PORT = 4040
const ARRAY = []
for (let i = 1; i <= 100000000; i++) {
  ARRAY.push(1)
}

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
  const now = new Date()
  // Sum: 10.000.000

  try {
    const sum = ARRAY.reduce((acc, cur) => {
      if (acc % 100 === 0) {
        console.log(acc)
      }
      return acc += cur
    }, 0)

    res.json({
      spent: ((new Date() - now) / 1000 | 0) + ' seconds',
      sum
    })
  } catch (err) {
    res.send(err.message)
  }
})


const server = app.listen(PORT)

server.on('listening', () => console.log(`server connect on port ${PORT}`))
server.on('error', err => console.error(err))
