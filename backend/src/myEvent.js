const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('event', (res1, res2) => {
  console.log('This is res1', res1)
  console.log('This is res2', res2)
})

emitter.emit('event', 'KQ1', 'KQ2')

// Write your own event emitter
// expect behavior is exactly same as Nodejs `events` module