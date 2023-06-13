const router = require("express").Router()


const {
    postVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    getAllVideo
  } = require("../controllers/video.controller");

  
  
router
  .route("/")
  .post(postVideo)
  .get(getAllVideo)

router
  .route("/:id")
  .put(updateVideo)
  .delete(deleteVideo)
  .get(getVideo)




module.exports= router