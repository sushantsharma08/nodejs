const express = require('express');
const fs = require('fs');
const app = express();
// app.get('/',(req,res)=>{
//     res
//     .status(200)
//     .json({message:'Hello from server side', app:'Natours'});
// });

// app.post('/',(req,res)=>{
//     res.send('You can post to this input  ')
// })
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours',(req,res)=>{
    res
    .status(200)
    .json({
        length : tours.length,
        status:'success',
        data: {
            tours:tours
        }
    })
})
const port =3000
app.listen(port,()=>{
    console.log(`running on port ${port}...`);
});
