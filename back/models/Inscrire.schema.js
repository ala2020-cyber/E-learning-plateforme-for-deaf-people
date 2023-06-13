const mongoose = require("mongoose");

// ?Done
const InscrireSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required:true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" ,required:true}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrolled", InscrireSchema);
