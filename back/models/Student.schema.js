const mongoose = require("mongoose");

const User = require("./Utilisateur.schema");

const StudentSchema = new mongoose.Schema(
  {
    listeFavoris: { type: Array },
  },
  { timestamps: true }
);

module.exports = User.discriminator("Student", StudentSchema);
