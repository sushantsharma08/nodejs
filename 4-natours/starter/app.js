const express = require('express');

const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userroutes')
const app = express();

app.use(morgan('dev'))

app.use(express.json());
app.use((req, res, next) => {
    console.log(`hello from middleware😁`);
    next();
})
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString()
    next();
})



// ///////// USER FUNTIONS





// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours', createTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)




    
    
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

const port = 3000
app.listen(port, () => {
    console.log(`running on port ${port}...`);
});
