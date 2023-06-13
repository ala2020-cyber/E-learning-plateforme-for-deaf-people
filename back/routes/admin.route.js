const router = require("express").Router();
const {
  registerAdmin,
  loginAdmin,
  updateAdmin,
  deleteAdmin,
  getAdmin,
  getAllAdmin,
} = require("../controllers/admin.controller");

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
// router.put("/:id", updateAdmin);
// router.delete("/:id", deleteAdmin)
// router.get("/", getAllAdmin);
router.get("/:id",getAdmin)

module.exports = router;
