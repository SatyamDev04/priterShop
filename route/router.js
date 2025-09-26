const { addNewData, getAllData } = require('../Controllers/formControllers')

const router=require('express').Router()

router.post('/add-data',addNewData)

router.get('/',getAllData)


module.exports=router