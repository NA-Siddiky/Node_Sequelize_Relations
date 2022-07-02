const db = require('../models');
const Products = db.products;

//create
const addProduct = async (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Please insert Title",
        });
        return
    }
    const productInfo = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    };

    try {
        const product = await Products.create(productInfo);
        res.status(200).send(product);
        console.log("product create successfully", product);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || 'Error occurred'
        })
    }
}

// get all products
const getAllProducts = async (req, res) => {
    const products = await Products.findAll({});
    res.status(200).send(products);
    console.log("get all products successfully", products);
}

// get single product
const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Products.findOne({
        where: { id: id }
    });
    res.status(200).send(product);
    console.log("get single products successfully", product);
}

//update
const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Products.update(req.body, {
        where: { id: id }
    });
    res.status(200).send(product);
    console.log("update product successfully", product);
}

//delete product
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Products.destroy({
        where: { id: id }
    });
    res.status(200).send('Product delete done...');
    console.log("Delete product successfully", product);
}

//Published Products
const publishedProducts = async (req, res) => {
    const products = await Products.findAll({
        where: {
            published: true
        }
    });
    res.status(200).send(products);
    console.log("Publish products successfully", products);
}

module.exports = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    publishedProducts

}