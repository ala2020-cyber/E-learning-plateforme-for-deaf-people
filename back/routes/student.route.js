
const router = require("express").Router();
const {
  registerStudent,
  loginStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  getAllStudent,
  findStudent
}= require("../controllers/student.controller")
const asyncHandler=require("express-async-handler")


router.post("/register", registerStudent);
router.post("/login", loginStudent)
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent)
router.get("/", getAllStudent)
router.get("/:id",getStudent)
router.get("/find",findStudent)

module.exports = router;
