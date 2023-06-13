const mongoose = require("mongoose");

// ?Done
const VideoSchema = new mongoose.Schema(
  {
    lesson: {type: mongoose.Schema.Types.ObjectId, ref:"Lesson", required:true},
    videoName: { type: String , required:true},
    filePath: { type: String ,required:true},
    transcriptionPath: { type: String ,required:true},
    size: {type:Number,required:true},
    duration: {type:Number,required:true}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema, "Videos");
