const Video = require("../models/Video.schema");
const postSomething =require("../services/post")
const updateSomething =require("../services/update")
const deleteSomething =require("../services/delete")
const getSomething =require("../services/get")
const getAllSomething= require("../services/getAll")




const postVideo = (req,res) => { postSomething(req,res,Video) }
const updateVideo =  (req, res) => { updateSomething(req,res,Video) };
const deleteVideo = (req, res) => {deleteSomething(req,res,Video)};
const getVideo = async (req, res) => { getSomething(req,res,Video)};
const getAllVideo = async (req, res) => {getAllSomething(req,res,Video)};

module.exports = {
    postVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    getAllVideo,

};
