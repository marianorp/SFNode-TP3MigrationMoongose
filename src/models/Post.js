const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
		title: String,
		content: String,
		createdAt: { type: Date, default: Date.now },
		published: { type: Boolean, default: false },
		author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
	},
	{ versionKey: false }
)

module.exports = mongoose.model('Post', PostSchema)
