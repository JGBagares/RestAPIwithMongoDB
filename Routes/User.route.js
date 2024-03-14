const express = require('express');
const router = express.Router();

const UserInfo = require("../Model/UserInfo.model");
const UserCreds = require("../Model/UserCreds.model");

// User Info ====================================================== vvvvvv

router.post('/info', async (req, res, next)=>{
    try{
        const info = new UserInfo(req.body);
        const result = await info.save();
        res.send(result);
    } catch (error){
        res.send(error.message)
    }
})

router.get('/info', async (req, res, next)=>{
    try {
        const result = await UserInfo.find({}, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});


router.get('/info/:id', async (req, res, next)=>{
    const id = req.params.id;
    try {
        const result = await UserInfo.findById(id, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

router.patch('/info/:id', async (req, res, next)=>{
   
   try {
     const id = req.params.id;
    const update = req.body;
    const result = await UserInfo.findByIdAndUpdate(id, update, {__v: 0});
    res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

router.delete('/info/:id', async (req, res, next)=>{
    const id = req.params.id;
    try {
        const result = await UserInfo.findByIdAndDelete(id, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

// User Creds ===================================== vvvvvvvvvvv

router.post('/creds', async (req, res, next)=>{
    try{
        const creds = new UserCreds(req.body);
        const result = await creds.save();
        res.send(result);
    } catch (error){
        res.send(error.message)
    }
})

router.get('/creds', async (req, res, next)=>{
    try {
        const result = await UserCreds.find({}, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
});


router.get('/creds/:id', async (req, res, next)=>{
    const id = req.params.id;
    try {
        const result = await UserCreds.findById(id, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

router.patch('/creds/:id', async (req, res, next)=>{
   
   try {
     const id = req.params.id;
    const update = req.body;
    const result = await UserCreds.findByIdAndUpdate(id, update, {__v: 0});
    res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

router.delete('/creds/:id', async (req, res, next)=>{
    const id = req.params.id;
    try {
        const result = await UserCreds.findByIdAndDelete(id, {__v: 0});
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})



module.exports = router;