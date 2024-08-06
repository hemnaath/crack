const express = require('express');
const categoryController = require('../controller/categoryController');
const {categoryUpload} = require('../helper/fileHelper');

const router = express.Router();

router.post('/create-category', categoryUpload.single('File'), categoryController.createCategory);
router.get('/get-category', categoryController.readCategory);
router.patch('/update-category/:id', categoryUpload.single('File'), categoryController.updateCategory);
router.delete('/delete-category/:id', categoryController.deleteCategory);


module.exports = router;