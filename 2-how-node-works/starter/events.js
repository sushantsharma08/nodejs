const { log } = require('console');
const EventEmitter = require('events');
const http = require('http')

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}
const myEmitter = new Sales();

myEmitter.on('newSale',()=>{
    console.log(`there is a new sale`);
})
 myEmitter.emit('newSale')

//  ////////////////////

const server = http.createServer();

server.on('request',(req,res)=>{
    console.log('request Recieved');
    res.end('heyy user')
});

server.on('close',(req,res)=>{
    console.log('closed');
});
server.listen(3000 , '127.0.0.1',()=>{
    console.log(`waiting for requests ...`);
}) 