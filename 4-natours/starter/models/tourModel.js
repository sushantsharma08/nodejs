const mongoose = require('mongoose')

const tourSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        unique:true,
        trim:true
    },
    duration:{
        type:Number,
        required:[true,'A tour must have some duration']
    },
    maxGroupSize:{
        type:Number,
        required:[true,'A tour must have a group size']
    },
    difficulty:{
        type:String,
        required:[true,'A tour must have a dificulty']
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,'price is required']
    },
    priceDiscount:Number,
    summary:{
        type:String,
        required:[true,'a tour must have a description'],
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:[true,"a tour must have image"]
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date]
})

const Tour = mongoose.model('Tour',tourSchema);

module.exports =Tour;