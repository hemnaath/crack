const express = require('express');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.post('/create-category', categoryController.createCategory);
router.get('/get-category', categoryController.readCategory);


module.exports = router;