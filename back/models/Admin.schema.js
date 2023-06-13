const mongoose = require("mongoose");
const User = require("./Utilisateur.schema");

// ?Done
const AdminSchema = new mongoose.Schema({}, { timestamps: true });

module.exports = User.discriminator("Admin", AdminSchema);
