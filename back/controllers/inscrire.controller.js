
const Inscrire= require("../models/Inscrire.schema")

const postSomething =require("../services/post")
const updateSomething =require("../services/update")
const deleteSomething =require("../services/delete")
const getSomething =require("../services/get")
const getAllSomething= require("../services/getAll")


const addCourseToStudent = async (req, res) => {
  
    if(req.user.role=== "Student"){
        
        try {
            const thing = await Inscrire.create({
                student:req.user
            })
            res.status(201).json({message:" successfully created students and courses !",data:thing})
        } catch (error) {
            res.status(400).json({mesage:"Problem while creating students and courses relation, retry !", error: error})
        }
    }
    res.status(400).json({error: "You are not a student (NOT AUTHORIZED)!"})

  };

const getAllCourseToStudent = (req,res) => {getAllSomething(req,res,Inscrire)}
const updateCourseToStudent = (req,res) => {updateSomething(req,res,Inscrire)}
const deleteCourseToStudent = (req,res) => {deleteSomething(req,res,Inscrire)}
const getCourseToStudent = (req,res) => {getSomething(req,res,Inscrire)}



module.exports= {
    addCourseToStudent,
    getAllCourseToStudent,
    updateCourseToStudent,
    deleteCourseToStudent,
    getCourseToStudent,
}