const products = require('./db.json')
let globalId = 2;

module.exports = {
    getProducts: (req,res) => {
        res.status(200)
        .send(products)
    },

    deleteProducts: (req,res) => {
        let index = products.findIndex(elem => elem.id === +req.params.id)
        products.splice(index,1)
        res.status(200).send(products)
    },
     
}