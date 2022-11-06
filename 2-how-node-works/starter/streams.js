const { log } = require('console');
const fs = require('fs')
const server = require('http').createServer();

server.on("request",(req,res)=>{
    fs.readFile("test-file.txt",(err,data)=>{
        if(err) console.log("error reading file");
        res.end(data);
    })
})

server.listen(4000 , '127.0.0.1',()=>{
    console.log(`Listening...`);
})