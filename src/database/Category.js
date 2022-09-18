const Category = require('../models/Category.js')

const getAllCategories = async () => {
	const allCategories = await Category.find().populate('posts')
	return allCategories
}

const getOneCategory = async categoryId => {
	const category = await Category.findById(categoryId).populate('posts')
	return category
}

const createNewCategory = async newCategory => {
	const createdCategory = await Category.create(newCategory)
	return createdCategory
}

const updateCategory = async (categoryId, updateCategory) => {
	const updatedCategory = await Category.findByIdAndUpdate(
		categoryId,
		updateCategory,
		{
			new: true,
		}
	)
	return updatedCategory
}

const deleteCategory = async categoryId => {
	const deletedCategory = await Category.findByIdAndDelete(categoryId)
	return deletedCategory
}

module.exports = {
	getAllCategories,
	getOneCategory,
	createNewCategory,
	updateCategory,
	deleteCategory,
}
