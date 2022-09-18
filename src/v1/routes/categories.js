const express = require('express')
const router = express.Router()

const categoryController = require('../../controllers/categoriesController.js')

router
	.get('/', categoryController.getAllCategories)
	.get('/:categoryId', categoryController.getOneCategory)
	.post('/', categoryController.createNewCategory)
	.put('/:categoryId', categoryController.updateCategory)
	.delete('/:categoryId', categoryController.deleteCategory)

module.exports = router
