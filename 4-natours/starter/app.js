const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
// app.get('/',(req,res)=>{
//     res
//     .status(200)
//     .json({message:'Hello from server side', app:'Natours'});
// });

// app.post('/',(req,res)=>{
//     res.send('You can post to this input  ')
// })
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
    res
        .status(200)
        .json({
            length: tours.length,
            status: 'success',
            data: {
                tours: tours
            }
        })
})

app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params.id);

    const id = Number(req.params.id)
    const tour = tours.find(el =>el.id===id)

    res.json({
        status:'success',
        data:{
            tour
        }
    })
    })

app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body);
    const newid = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newid }, req.body);

    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res
            .status(201)
            .json({
                "status": "success",
                "data": {
                    tour: newTour
                }
            })
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`running on port ${port}...`);
});
