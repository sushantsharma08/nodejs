const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})
const app =require('./app')
// console.log(process.env);

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
    );

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    UseFindAndModify:false
}).then(con=>{
    console.log(con.connections);
    console.log(`DB connection successful`);
})

const port = process.env.PORT||3000
app.listen(port, () => {
    console.log(`running on port ${port}...`);
});

