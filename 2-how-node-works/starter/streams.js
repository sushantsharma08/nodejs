const { log } = require('console');
const fs = require('fs')
const server = require('http').createServer();

server.on("request",(req,res)=>{
    /* soln 1 */
    // fs.readFile("test-file.txt",(err,data)=>{
    //     if(err) console.log("error reading file");
    //     res.end(data);
    // })
    // soln 2
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
})

server.listen(4000 , '127.0.0.1',()=>{
    console.log(`Listening...`);
})