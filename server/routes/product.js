const express = require('express')
const router = express.Router()

const {addProduct, getAllProducts, getOneProduct} = require("../controllers/productController")

const {isLoggedIn, customRole } = require("../middlewares/user")


// user routes
router.route('/allproducts').get(getAllProducts)
router.route('/products/:id').get(getOneProduct)

// admin routes
router.route('/admin/products/add').post(addProduct)

module.exports = router;