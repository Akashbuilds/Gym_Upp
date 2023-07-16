const express = require('express')
const Router = express.Router()
const Diet = require('../models/Diet')

//post
Router.post('/', async (req,res)=>{
    const Dietplan = new Diet(req.body)
    try {
        const saveDiet = await Dietplan.save()
        res.status(200).json(saveDiet)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get
Router.get('/',async (req,res)=>{
    try {
        const getDiets = await Diet.find()
        res.status(200).json(getDiets)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = Router