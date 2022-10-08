const fs = require('fs');
const http = require('http');
const url = require('url');
// const hello ="Hello World";


// // reading a file
const file = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(file);

// // writing a file
// const fileWrite = fs.writeFileSync('./txt/written.txt' , `hello there today we'll loook at avacado's : ${file} , created on : ${Date.now()}`);
// console.log(fs.readFileSync('./txt/written.txt', 'utf-8'));

// // async read file
// console.log(`-------------X-------------X-------------X-------------X-------------X-------------X-------------X-------------`);

// fs.readFile('./txt/start.txt' , 'utf-8' , (err,data) =>{
//     console.log( data);
// });
// console.log('this should be read first');


// // reading a file from result of other 
// fs.readFile('./txt/start.txt' , 'utf-8' , (err,data1) =>{
//     fs.readFile(`./txt/${data1}.txt` , 'utf-8' , (err,data2) =>{
//         console.log( data2);
//         fs.readFile('./txt/append.txt' , 'utf-8' , (err,data3) =>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err=>{
//                 console.log('file written');
//             })
//         });
//     })
// });



////////////////////////////////////
// server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const tempOverview =  fs.readFileSync(`${__dirname}/templates/overview.html`,'utf-8');
const tempCard =  fs.readFileSync(`${__dirname}/templates/card.html`,'utf-8');
const tempProduct =  fs.readFileSync(`${__dirname}/templates/product.html`,'utf-8');


const dataObj = JSON.parse(data)

const port = 8000;

const server = http.createServer((req,res)=>{
    const pathName = req.url;

        //overview
    if (pathName==='/' || pathName=== '/overview') {
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(tempOverview);

        //product
    }else if( pathName === '/product'){
        res.end('this is Product');

        //api
    }else if( pathName === '/api'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data)

        //not-found
    }else{
        res.writeHead(404);
        res.end('Page not Found');
    }
});

server.listen(port  ,'127.0.0.1', (err)=>{
 console.log(`hello`);

});