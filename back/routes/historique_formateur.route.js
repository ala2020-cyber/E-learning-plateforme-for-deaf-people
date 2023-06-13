const routeur= require("express").Router()
const {
postNewTask,
getHistorique,
deleteTask,
} = require("../controllers/historiqueFormateur.controller")



routeur
.route("/")
.post(postNewTask)
.get(getHistorique)


routeur
.route("/:id")
.delete(deleteTask)



module.exports= routeur