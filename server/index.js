const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const {
    getProducts,
    // deleteProduct, 
    // updateProduct, 
    createProduct
} = require('../controller')

app.get(`/api/products`, getProducts)
// app.delete(`/api/products/:id`, deleteProduct)
app.post(`/api/products`, createProduct)
// app.put(`/api/product/:id`, updateProduct)
console.log("index.js running")
const SERVER_PORT = '4004';
app.listen(SERVER_PORT,() => console.log(`up and running on ${SERVER_PORT}`)) 