const express = require('express')
const app = express()
const mongoose = require('mongoose')

const DietSchema = new mongoose.Schema({
    Title : {
        required : true,
        type : String
    },
    Diet : {
        required : true,
        type : String
    },
    Tips : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model("Diet",DietSchema)