const categoryService = require("../services/categoryService.js")


const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getAllCategories()
    res.status(200).json({status: "All Categories", data: allCategories})
}


const getOneCategory = async (req, res) => {
    const { id } = req.params
    const oneCategory = await categoryService.getOneCategory(id)
    res.status(200).json({status: "Specific Category", id: oneCategory })
}

const createNewCategory = async (req, res) => {
const { name } = req.body
    if(!name) {
        res.status(400).json({
            status: "error", 
            err: "You must fill the field",
            reason: "Field: name is empty"
        })  
    } 
    
    const newCategory = {
        name: name
    }

    const createCategory = await categoryService.createNewCategory(newCategory) 
    res.status(201).json({msg: "Category created successfully!", data: createCategory})  
}

const deleteCategory = async (req, res) => {  // Servicio de eliminar usuario
    const { id } = req.params
    deleteOneCategory = await categoryService.deleteCategory(id)
    res.json({msg: "Category deleted!", data: deleteOneCategory})
}



const updateCategory = async (req, res) => {     // Servicio de editar
    const { id } = req.params
    const { name } = req.body
    if(name) {
        res.status(400).json({
            status: "error", 
            err: "You must fill the field",
            reason: "Field: name is empty"
        })  
    } 
    
    const newCategory = {
        name: name
    }


    const updateCategory = await categoryService.updateCategory(newCategory) 
    res.status(201).json({msg: "Category update successfully!", data: updateCategory})  
}



module.exports = {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}