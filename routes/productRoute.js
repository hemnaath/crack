const express = require('express');
const productController = require('../controller/productController');
const {productUpload} = require('../helper/fileHelper');

const router = express.Router();

router.post('/create-product', productUpload.single('File'), productController.createProduct);
router.get('/get-product', productController.readProduct);
router.patch('/update-product/:id', productUpload.single('File'), productController.updateProduct);
router.delete('/delete-product/:id', productController.deleteProduct);


module.exports = router;