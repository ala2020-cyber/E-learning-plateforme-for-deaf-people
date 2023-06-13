const mongoose = require("mongoose");

// ?Done
const DocumentSchema = new mongoose.Schema(
  {
    lesson: {type: mongoose.Schema.Types.ObjectId, ref:"Lesson", required:true},
    
    titre: { type: String },
    
    description: { type: String },
    
    path: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", DocumentSchema, "Documents");
