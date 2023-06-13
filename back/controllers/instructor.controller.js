
const Instructor = require("../models/Instructor.schema");
const  registerUser = require("../services/registerUser")
const loginUser= require("../services/loginUser")
const updateUser= require("../services/updateUser")
const deleteUser= require("../services/deleteUser")
const getAll= require("../services/getAll")
const getUser= require("../services/getUser")
const findUser= require("../services/findUser")



const registerInstructor = (req,res)=> { registerUser(req,res,Instructor)}
const loginInstructor= (req,res)=> { loginUser(req,res,Instructor)}
const updateInstructor=  (req, res) => {updateUser(req,res,Instructor) }
const deleteInstructor=  (req, res) => { deleteUser(req,res,Instructor)}
const getAllInstructor=  (req, res) => {getAll(req,res, Instructor) }
const getInstructor=  (req,res) => { getUser(req,res,Instructor)}
const findInstructor= (req,res) => {findUser(req,res,Instructor)}




module.exports= {
    registerInstructor,
    loginInstructor,
    updateInstructor,
    deleteInstructor,
    getInstructor,
    getAllInstructor,
    findInstructor
}