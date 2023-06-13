const router = require("express").Router();
const {
  postCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  getAllCourse,
  getCourseFormateur
} = require("../controllers/course.controller");
const protect = require("../middlewars/auth")

router.post("/",protect,postCourse);
router.put("/:id",protect,updateCourse);
router.delete("/:id",protect,deleteCourse);
router.get("/InstructorCourses",getCourseFormateur)
router.get("/:id",getCourse);
router.get("/",getAllCourse);

module.exports = router;
