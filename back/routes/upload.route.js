const router = require("express").Router();

const {
  uploadvideo,
  uploadvideos,
  uploadimage,
  uploadimageProfile
} = require("../controllers/upload.controller");

// upload single file
router.post("/uploadvideo", uploadvideo);

//  upload multiple file
router.post("/uploadvideos", uploadvideos);

// upload image endpoint
router.post("/uploadimage", uploadimage);

// upload image profile 
router.post("/uploadprofile", uploadimageProfile);

module.exports = router;
