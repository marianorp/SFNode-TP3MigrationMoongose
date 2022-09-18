const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
		name: { type: String, required: '{PATH} is required!' },
		email: String,
		age: Number,
		createdAt: { type: Date, default: Date.now },
		country: String,
		posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
		role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
	},
	{ versionKey: false }
)

module.exports = mongoose.model('User', UserSchema)
