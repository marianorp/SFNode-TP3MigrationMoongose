const Post = require('../database/Post.js')

const getAllPosts = () => {
	const allPosts = Post.getAllPosts()
	return allPosts
}

const getOnePost = postId => {
	const post = Post.getOnePost(postId)
	return post
}

const createNewPost = newPost => {
	const createdPost = Post.createNewPost(newPost)
	return createdPost
}

const updatePost = (postId, updatePost) => {
	const updatedPost = Post.updatePost(postId, updatePost)
	return updatedPost
}

const deletePost = postId => {
	const deletedCategory = Post.deletePost(postId)
	return deletedCategory
}

module.exports = {
	getAllPosts,
	getOnePost,
	createNewPost,
	updatePost,
	deletePost,
}
