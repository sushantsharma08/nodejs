const fs = require('fs');
const crypto = require('crypto')
const start = Date.now();

setTimeout(() =>console.log(`timer 1 finished`), 0);
setImmediate(() => console.log("Immidiate one finished"));

fs.readFile('text-file-.txt', () => {
    console.log(`I/O finished`)

    setTimeout(() =>console.log(`timer 2 finished`), 0);
    setTimeout(() =>console.log(`timer 3 finished`), 3000);
    setImmediate(() => console.log("Immidiate one finished"));

    process.nextTick(()=>console.log('process.nexttick'));
    crypto.pbkdf2('password','salt', 100000, 1024,'sha512',()=>{
        console.log(`${Date.now()-start}, password encrypted`);
    })
});

console.log(`hello top level`);