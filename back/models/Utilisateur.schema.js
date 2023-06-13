const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema(
  {
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Email: {
      type: String,
      required: true,
      unique: true,
      validator: [validator.isEmail, "please enter a valid email"],
    },
    mot_de_passe: {
      type: String,
      required: true,
      trim: true,
      minlength: [6, "password should be more than 6 characters"],
    },
    Telephone: { type: String },
    twitterlink: { type: String, default: "" },
    facebooklink: { type: String, default: "" },
    pinterestlink: { type: String, default: "" },
    linkedinlink: { type: String, default: "" },

    ImageProfil: { type: String },
  },
  { timestamps: true, discriminatorKey: "role", collection: "user" }
);

const User = mongoose.model("Users", usersSchema);

module.exports = User;
