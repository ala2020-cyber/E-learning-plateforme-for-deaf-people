const mongoose = require("mongoose");

//?Done
const CourseSchema = new mongoose.Schema({
  Titre: { type: String, unique:true},
  
  Description: {type: String},
  
  formateur: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" }, //
  
  categorie: {type: String},  
  
  niveauFormation: {type: String, default:"Beginner" }, 
  
  Langue: {type: String},
  
  NombreParticipants: {type:Number,default:0},
  
  prerequisFormation: {type: String}, //

  imageCoursePath:{type:String}
},
{
  timestamps:true
});

module.exports = mongoose.model("Course", CourseSchema, "Courses");
