const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const {
    getProducts,
    deleteProduct, 
    updateProduct, 
    createProduct
} = require('../contoller.js')


app.get(`/api/products`, getProducts)
app.delete(`/api/products/:id`, deleteProduct)
app.post(`/api/product`, createProduct)
app.put(`/api/product/:id`, updateProduct)



console.log("hi")

const SERVER_PORT = '5500';
app.listen(SERVER_PORT,() => console.log(`up and running on ${SERVER_PORT}`)) 