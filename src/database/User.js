const User = require('../models/User.js')

const getAllUsers = async () => {
	const allUsers = await User.find().populate('posts')
	return allUsers
}

const getOneUser = async userId => {
	const user = await User.findById(userId).populate('posts')
	return user
}

const createNewUser = async newUser => {
	const createdUser = await User.create(newUser)
	return createdUser
}

const updateUser = async (userId, updateUser) => {
	const updatedUser = await User.findByIdAndUpdate(userId, updateUser, {
		new: true,
	})
	return updatedUser
}

const deleteUser = async userId => {
	const deletedUser = await User.findByIdAndDelete(userId)
	return deletedUser
}

module.exports = {
	getAllUsers,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
}
