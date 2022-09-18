const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
		name: String,
		posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	},
	{ versionKey: false }
)

module.exports = mongoose.model('Category', PostSchema)
