const Categorie = require("../models/Categorie.schema");

const postCategorie = async (req, res) => {
  const newCourse = new Categorie(req.body);

  try {
    const newCategorie = await newCourse.save();
    res.status(201).json(newCategorie);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCategorie = async (req, res) => {
  try {
    const updatedCategorie = await Categorie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategorie);
  } catch (err) {
    res.Status(500).json(err);
  }
};

const deleteCategorie = async (req, res) => {
  try {
    await Categorie.findByIdAndDelete(req.params.id);
    res.status(200).json("Categorie has been deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findById(req.params.id).populate(
      "formateur"
    );
    res.status(200).json(categorie);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllCategorie = async (req, res) => {
  try {
    const categories = await Categorie.find().select("-_id");
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  postCategorie,
  updateCategorie,
  deleteCategorie,
  getCategorie,
  getAllCategorie,
};
