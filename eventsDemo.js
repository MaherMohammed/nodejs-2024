import { EventEmitter } from 'events'


const myEmitter = new EventEmitter();

function greetHandler() {
    console.log('hello')
}

function goodByeHandler() {
    console.log('goodbye')
}


// register event listners

myEmitter.on('greet',greetHandler)
myEmitter.on('goodbye',goodByeHandler)

//emit events

myEmitter.emit('greet')
myEmitter.emit('goodbye')