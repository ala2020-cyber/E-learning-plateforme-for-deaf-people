const router = require("express").Router()


const {
  postLesson,
  updateLesson,
  deleteLesson,
  getLesson,
  getAllLesson,
} = require("../controllers/lesson.controller");

router.post("/", postLesson);
router.put("/:id", updateLesson);
router.delete("/:id", deleteLesson);
router.get("/",getAllLesson);
router.get("/:id", getLesson);


module.exports= router