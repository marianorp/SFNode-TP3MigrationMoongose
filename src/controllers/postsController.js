const postService = require("../services/postService.js")


const getAllPosts = async (req, res) => {
    const allPosts = await postService.getAllPosts( )
    res.status(200).json({status: "All post", data: allPosts})
}


const getOnePost = async (req, res) => {
    const { id } = req.params
    const onePost = await postServicegetOnePost(id)
    res.status(200).json({status: "Specific Id", id: onePost })
}

const createNewPost = async (req, res) => {
const { title, content, authorId } = req.body
    if(!title || !content || !authorId) {
        res.status(400).json({
            status: "error", 
            err: "You must fill all the fields",
            reason: "Fields: title, content, or authorId are empty"
        })  
    } 
    
    const newPost = {
        title: title,
        content: content,
        authorId: authorId
    }

    const createdPost = await postService.createNewPost(newPost) 
    res.status(201).json({msg: "Post created successfully!", data: createdPost})  
}

const deletePost = async (req, res) => {  // Servicio de eliminar usuario
    const { id } = req.params
    await postService.deletePost(id)
    res.json({msg: "Post deleted!"})
}



const updatePost = async (req, res) => {     // Servicio de editar
    const { id } = req.params
    const { title, content, authorId } = req.body
    if(!title || !content || !authorId) {
        res.status(400).json({
            status: "error", 
            err: "You must fill all the fields",
            reason: "Fields: title, content, or authorId are empty"
        })  
    } 
    
    const newPost = {
        title: title,
        content: content,
        authorId: authorId
    }

    const updatePost = await postService.updatePost(id, newPost) 
    res.status(200).json({msg: "Updated Post successfully!", data: updatePost })
}


module.exports = {
    getAllPosts,
    getOnePost,
    createNewPost,
    updatePost,
    deletePost
}