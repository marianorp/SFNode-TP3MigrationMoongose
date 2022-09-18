// Modules
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000
const app = express()


// Import routes
const v1UsersRoute = require('./v1/routes/users.js')
const v1CategoriesRoute = require('./v1/routes/categories.js')
const v1PostsRoute = require('./v1/routes/posts.js')


// Mongoose
const url = "mongodb://localhost/sf_node_socialapp"

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(err))


// Middlewares
app.use(express.json())
app.use(morgan('dev'))


// Routes
app.use('/api/v1/users', v1UsersRoute)
app.use('/api/v1/categories', v1CategoriesRoute)
app.use('/api/v1/posts', v1PostsRoute)


// Server
app.listen(PORT, () => {
	console.log(`Server in port ${PORT}`)
})
