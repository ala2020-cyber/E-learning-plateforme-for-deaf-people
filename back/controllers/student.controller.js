
const Student = require("../models/Student.schema");
const  registerUser = require("../services/registerUser")
const loginUser= require("../services/loginUser")
const updateUser= require("../services/updateUser")
const deleteUser= require("../services/deleteUser")
const getAll= require("../services/getAll")
const getUser= require("../services/getUser")
const findUser= require("../services/findUser")


const registerStudent = (req,res)=> { registerUser(req,res,Student)}
const loginStudent= (req,res)=> { loginUser(req,res,Student)}
const updateStudent=  (req, res) => {updateUser(req,res,Student) }
const deleteStudent=  (req, res) => { deleteUser(req,res,Student)}
const getAllStudent=  (req, res) => {getAll(req,res, Student) }
const getStudent=  (req,res) => { getUser(req,res,Student)}
const findStudent= (req,res) => {findUser(req,res,Student)}




module.exports= {
    registerStudent,
    loginStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getAllStudent,
    findStudent
}