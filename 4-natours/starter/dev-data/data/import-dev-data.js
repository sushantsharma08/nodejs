const mongoose = require('mongoose')
const fs = require('fs')
const dotenv = require('dotenv')
const Tour = require('./../../models/tourModel')
const { dirname } = require('path')
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // UseFindAndModify:false
}).then(con => {
    // console.log(con.connections);
    console.log(`DB connection successful`);
})
// read json file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));
// import data into db
const importData = async () => {
    try {
        await Tour.create(tours);
        console.log("data loaded to DB");
        process.exit();
    } catch (err) {
        console.log(err);
    }
}
// delete data from collection
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log("data deleted successfully");
        process.exit();
    } catch (err) {
        console.log(err);
    }
}



if (process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete') {
    deleteData()
}

console.log(process.argv);