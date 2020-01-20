const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])

const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('convert', () => {
    for(var item of buf)
    {
        console.log(item)
    }
    console.log('buffer converted')
})

emitter.emit('convert')