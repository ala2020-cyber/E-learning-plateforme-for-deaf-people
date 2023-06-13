const router = require("express").Router();
const protect= require("../middlewars/auth")
const {
  addCourseToStudent,
  getAllCourseToStudent,
  updateCourseToStudent,
  deleteCourseToStudent,
  getCourseToStudent,
} = require("../controllers/inscrire.controller");
router
    .route("/")
    .post(protect,addCourseToStudent)
    .get(getAllCourseToStudent);
router
    .route("/:id")
    .put(updateCourseToStudent)
    .delete(deleteCourseToStudent)
    .get(getCourseToStudent);

module.exports = router;
