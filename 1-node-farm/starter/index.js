const fs = require('fs');

const hello ="Hello World";


// reading a file
const file = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(file);

// writing a file
const fileWrite = fs.writeFileSync('./txt/written.txt' , `hello there today we'll loook at avacado's : ${file} , created on : ${Date.now()}`);
console.log(fs.readFileSync('./txt/written.txt', 'utf-8'));