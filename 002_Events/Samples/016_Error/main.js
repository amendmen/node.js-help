const EventEmitter = require('events');

class FileRead extends EventEmitter{}

const newEm = new FileRead();
newEm.on('read', () => {
    console.log('read');
})
newEm.on('wright', () => {
    console.log('2222')
})

newEm.emit('read');
newEm.emit('wright');
