const EventEmitter = require('events');

// create new emitter class instance
const myEmitter = new EventEmitter();

// event hander function 
const myEventHandler = (name, age) => {
    console.log('myEvent has been called with arguments:', name, age);
}

// create a named event
myEmitter.on('myevent', myEventHandler);

// Emit the named event 
myEmitter.emit('myevent', 'Selva', 24);

// listern count 
const count = myEmitter.listenerCount('myevent');
console.log('Event Count:', count);

// Remove the event 
myEmitter.off('myevent', myEventHandler);
myEmitter.emit('myevent', 'Selva', 24); // this wont work because the named envent has been removed 

// Remove all listerns
myEmitter.removeAllListeners(['myevent']);
myEmitter.emit('myevent', 'Selva', 24); // this wont work because the named envent has been removed 
