const mongoose = require("mongoose");

//?Done
const evaluationSchema = new mongoose.Schema(
  {

    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    
    nb_etoile:{ type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Evaluation", evaluationSchema);
