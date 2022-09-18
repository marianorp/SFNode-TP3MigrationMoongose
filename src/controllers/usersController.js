const userService = require("../services/userService.js") // trae el servicio


const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers( )
    res.status(200).json({status: "All users", data: allUsers})
}


const getOneUser = async (req, res) => {
    const { id } = req.params           // desectruturo el id
    const oneUser = await userService.getOneUser(id)
    res.status(200).json({status: "Specific User", id: oneUser})
}


const createNewUser = async (req, res) => {
    const { name, email, age, country} = req.body
    if(!name || !email || !age || !country) {
        res.status(400).json({status: "error", 
                  err: "You must fill all the fields",
                  reason: "Fields: name, email, age or country are empty"
        })  
    } 

    const newUser = {
        name: name,
        email: email,
        age: age,
        country: country
    }

    const createUser = await userService.createNewUser(newUser) 
    res.status(201).json({msg: "User successfully created!", data: createUser})  
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    const deleteOneUser = await userService.deleteUser(id)
    res.json({msg: "User deleted!", data: deleteOneUser})   /* data: deleteOneUser muestra el usuario eliminado aparte del msg*/  
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, email, age, country} = req.body
    if(!name || !email || !age || !country) {
        res.status(400).json({status: "error", 
                  err: "You must fill all the fields",
                  reason: "Fields: name, email, age or country are empty"
        })  
    } 

    const newUser = {
        name: name,
        email: email,
        age: age,
        country: country
    }

    const updateOneUser = await userService.updateUser(id, newUser) 
    res.status(201).json({msg: "User successfully updated!", data: updateOneUser})  
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    deleteUser,
    updateUser
}