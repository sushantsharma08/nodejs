const fs = require('fs');

const hello ="Hello World";


// reading a file
const file = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(file);

// writing a file
const fileWrite = fs.writeFileSync('./txt/written.txt' , `hello there today we'll loook at avacado's : ${file} , created on : ${Date.now()}`);
console.log(fs.readFileSync('./txt/written.txt', 'utf-8'));

// async read file
console.log(`-------------X-------------X-------------X-------------X-------------X-------------X-------------X-------------`);

fs.readFile('./txt/start.txt' , 'utf-8' , (err,data) =>{
    console.log( data);
});
console.log('this should be read first');


// reading a file from result of other 
fs.readFile('./txt/start.txt' , 'utf-8' , (err,data1) =>{
    fs.readFile(`./txt/${data1}.txt` , 'utf-8' , (err,data2) =>{
        console.log( data2);
        fs.readFile('./txt/append.txt' , 'utf-8' , (err,data3) =>{
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err=>{
                console.log('file written');
            })
        });
    })
});