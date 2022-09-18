const User = require('../database/User.js')

const getAllUsers = () => {
	const allUsers = User.getAllUsers()
	return allUsers
}

const getOneUser = userId => {
	const user = User.getOneUser(userId)
	return user
}

const createNewUser = newUser => {
	const createdUser = User.createNewUser(newUser)
	return createdUser
}

const updateUser = (userId, updateUser) => {
	const updatedUser = User.updateUser(userId, updateUser)
	return updatedUser
}

const deleteUser = userId => {
	const deletedUser = User.deleteUser(userId)
	return deletedUser
}

module.exports = {
	getAllUsers,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
}
