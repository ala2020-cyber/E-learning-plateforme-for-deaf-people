const router = require("express").Router()


const {
  postCategorie,
  updateCategorie,
  deleteCategorie,
  getCategorie,
  getAllCategorie,
} = require("../controllers/categorie.controller");

router.post("/", postCategorie);
router.put("/:id", updateCategorie);
router.delete("/:id", deleteCategorie);
router.get("/", getAllCategorie);
router.get("/:id", getCategorie);


module.exports= router