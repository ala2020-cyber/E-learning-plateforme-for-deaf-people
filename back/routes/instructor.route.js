

const router = require("express").Router();
const {
  registerInstructor,
  loginInstructor,
  updateInstructor,
  deleteInstructor,
  getInstructor,
  getAllInstructor,
  findInstructor
}= require("../controllers/instructor.controller")


router.post("/register", registerInstructor);
router.post("/login", loginInstructor);
router.put("/:id",updateInstructor);
router.delete("/:id", deleteInstructor)
router.get("/",getAllInstructor)
router.get("/:id",getInstructor)
router.get("/find",findInstructor)

module.exports = router;
