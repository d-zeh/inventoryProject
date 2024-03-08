const products = require('./db.json')
let globalId = 3;

module.exports = {
    getProducts: (req,res) => {
        console.log("controller")
        res.status(200)
        .send(products)
    },

    deleteProducts: (req,res) => {
        let index = products.findIndex(elem => elem.id === +req.params.id)
        products.splice(index,1)
        res.status(200).send(products)
    },
    createProduct: (req,res) => {
        let{ name, protein, price, quantity} = req.body
        let newProduct = {
            name,
            protein,
            price,
            quantity
        }
        products.push(newProduct)
        res.status(200).send(products)
        globalId++;

    }
     
}