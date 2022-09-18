const Category = require('../database/Category.js')

const getAllCategories = () => {
	const allCategories = Category.getAllCategories()
	return allCategories
}

const getOneCategory = categoryId => {
	const category = Category.getOneCategory(categoryId)
	return category
}

const createNewCategory = newCategory => {
	const createdCategory = Category.createNewCategory(newCategory)
	return createdCategory
}

const updateCategory = (categoryId, updateCategory) => {
	const updatedCategory = Category.updateCategory(categoryId, updateCategory)
	return updatedCategory
}

const deleteCategory = categoryId => {
	const deletedCategory = Category.deleteCategory(categoryId)
	return deletedCategory
}

module.exports = {
	getAllCategories,
	getOneCategory,
	createNewCategory,
	updateCategory,
	deleteCategory,
}
