const express = require('express')
const router = express.Router()

const userController = require('../../controllers/usersController.js')

router
	.get('/', userController.getAllUsers)
	.get('/:userId', userController.getOneUser)
	.post('/', userController.createNewUser)
	.put('/:userId', userController.updateUser)
	.delete('/:userId', userController.deleteUser)

module.exports = router
