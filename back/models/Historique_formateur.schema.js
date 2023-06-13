const mongoose = require("mongoose");

//?Done
const historique_formateurSchema = new mongoose.Schema(
  {
    formateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
    taskDone: { type: String },
    Date: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Historique_formateur",
  historique_formateurSchema
);
