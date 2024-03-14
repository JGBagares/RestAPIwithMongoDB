const express = require('express');
const router = express.Router();

const Products = require("../Model/products.model");


router.post('/', async (req, res, next)=>{
    try{
        const product = new Products(req.body);
        const result = await product.save();
        res.send(result);
    } catch (error){
        res.send(error.message)
    }
})

router.get('/', async (req, res, next)=>{
    try {
        const result = await Products.find({}, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});


router.get('/:id', async (req, res, next)=>{
    const id = req.params.id;
    try {
        const result = await Products.findById(id);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

router.patch('/:id', async (req, res, next)=>{
   
   try {
     const id = req.params.id;
    const update = req.body;
    const result = await Products.findByIdAndUpdate(id, update);
    res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

router.delete('/:id', async (req, res, next)=>{
    const id = req.params.id;
    try {
        const result = await Products.findByIdAndDelete(id);
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

module.exports = router;