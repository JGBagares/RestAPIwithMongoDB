const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const port = "3000";
const url ="mongodb://localhost:27017";


mongoose.connect(url, {})
.then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const UserRoute = require('./Routes/User.route');
app.use('/user', UserRoute)

const ProductRoute = require('./Routes/products.route');
app.use('/product', ProductRoute);

//Error id wrong endpoint
app.use((req, res, next)=>{
    const err = new Error("Not found");
    err.status = 404;
    next(err);
}) 

//Middleware Express
app.use((req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
}) 

app.listen(port, ()=>{
    console.log('Listening on port 3000....')
})