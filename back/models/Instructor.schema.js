const mongoose = require("mongoose");
const User = require("./Utilisateur.schema");

//?Done
const InstructorSchema = new mongoose.Schema(
  {
    Description: { type: String, default:"" },
    Job: {type:String, default:"" },
    Statut: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = User.discriminator("Instructor", InstructorSchema);
