const express = require('express')
const router = express.Router()

const postController = require('../../controllers/postsController.js')

router
	.get('/', postController.getAllPosts)
	.get('/:postId', postController.getOnePost)
	.post('/', postController.createNewPost)
	.put('/:postId', postController.updatePost)
	.delete('/:postId', postController.deletePost)

module.exports = router
