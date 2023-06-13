
const Admin = require("../models/Admin.schema");
const  registerUser = require("../services/registerUser")
const loginUser= require("../services/loginUser")
const updateUser= require("../services/updateUser")
const deleteUser= require("../services/deleteUser")
const getAll= require("../services/getAll")
const getUser= require("../services/getUser")



const registerAdmin = (req,res)=> { registerUser(req,res,Admin)}
const loginAdmin= (req,res)=> { loginUser(req,res,Admin)}
// const updateAdmin=  (req, res) => {updateUser(req,res,Admin) }
// const deleteAdmin=  (req, res) => { deleteUser(req,res,Admin)}
// const getAllAdmin=  (req, res) => {getAll(req,res, Admin) }
const getAdmin=  (req,res) => { getUser(req,res,Admin)}




module.exports= {
    registerAdmin,
    loginAdmin,
    // updateAdmin,
    // deleteAdmin,
    getAdmin,
    // getAllAdmin
}