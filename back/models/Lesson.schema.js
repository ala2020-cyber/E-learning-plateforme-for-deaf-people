const mongoose = require("mongoose");

// ?Done 
const LessonSchema = new mongoose.Schema(
  {
    formation: { type: mongoose.Schema.Types.ObjectId, ref:"Course"},  
    
    LessonTitle: { type: String},

    LessonDescription: { type: String},

    LessonDuration:{type: Number},

     videos: [ {

      videoTitle: { type: String },

      customVideoTitle: { type: String },

      videoPath: { type: String },

      transcriptionPath: { type: String},
      
      durationTranscription: { type: String},

      size: {type:Number},

      VideoDuration:{type:Number}
      
     }]
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", LessonSchema);
