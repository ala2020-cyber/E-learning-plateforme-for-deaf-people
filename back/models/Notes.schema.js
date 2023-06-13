const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema(
  {
    studentID: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    courseID: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    note: { type:String }
  },
  { timestamps: true }
);

module.exports= mongoose.model("Notes",NotesSchema)