const express = require('express');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.post('/create-category', categoryController.createCategory);


module.exports = router;