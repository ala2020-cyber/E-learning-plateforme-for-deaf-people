

const HistoriqueFormateur= require("../models/Historique_formateur.schema")
const post= require("../services/post")
const getAll= require("../services/getAll")
const removeTask= require("../services/delete")



const postNewTask= async(req,res)=> {post(req,res,HistoriqueFormateur)}
const getHistorique= async(req,res)=> {getAll(req,res, HistoriqueFormateur)}
const deleteTask= async(req,res)=> {removeTask(req,res,HistoriqueFormateur)}






module.exports= {
    postNewTask,
    getHistorique,
    deleteTask,
}