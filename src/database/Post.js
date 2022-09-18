const Post = require('../models/Post.js')
const Category = require('../models/Category.js')
const User = require('../models/User.js')

const getAllPosts = async () => {
	const allPost = await Post.find().populate('author').populate('categories')
	return allPost
}

const getOnePost = async postId => {
	const post = await Post.findById(postId)
		.populate('author')
		.populate('categories')
	return post
}

const createNewPost = async newPost => {
	const { authorId } = newPost
	const { categories } = newPost

	if (categories) {
		const { connect } = categories

		newPost.categories = []

		for (const { id } of connect) {
			newPost.categories.push(id)
		}
	}

	const userById = await User.findById(authorId)

	newPost.author = userById.id

	const createdPost = await Post.create(newPost)

	await createdPost.save()

	if (categories) {
		const categoriesByIds = await Category.find({
			_id: { $in: newPost.categories },
		})

		await Promise.all(
			categoriesByIds.map(async category => {
				category.posts.push(createdPost)
				return await category.save()
			})
		)
	}

	userById.posts.push(createdPost)

	await userById.save()

	return createdPost
}

const updatePost = async (postId, updatePost) => {
	const updatedPost = await Post.findByIdAndUpdate(postId, updatePost, {
		new: true,
	})
	return updatedPost
}

const deletePost = async postId => {
	const deletedPost = await Post.findByIdAndDelete(postId)
	return deletedPost
}

module.exports = {
	getAllPosts,
	getOnePost,
	createNewPost,
	updatePost,
	deletePost,
}
