const express = require('express');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.post('/create-category', categoryController.createCategory);
router.get('/get-category', categoryController.readCategory);
router.patch('/update-category/:id', categoryController.updateCategory);
router.delete('/delete-category/:id', categoryController.deleteCategory);


module.exports = router;