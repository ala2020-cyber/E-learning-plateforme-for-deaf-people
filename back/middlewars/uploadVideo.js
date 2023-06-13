const multer = require("multer");



const storage = multer.diskStorage({
    destination: (req, video, cb) => {
      
        cb(null, "C:/Users/MSI/Desktop/e-learning platform/back/videos");
    },
    filename: (req, video, cb) => {
        console.log(video);
        cb(null, video.originalname);
    },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: {
      // set the maximum file size to 500MB
      max: 1024 * 1024 * 1000,
      // set the minimum file size to 1KB
      min: 1,
    },
  },
  fileFilter: function (req, file, cb) {
    // check if the file is a video
    if (
      file.mimetype === "video/mp4" ||
      file.mimetype === "video/quicktime" ||
      file.mimetype === "video/x-ms-wmv" ||
      file.mimetype === "video/x-msvideo" ||
      file.mimetype === "video/3gpp" ||
      file.mimetype === "video/x-matroska" ||
      file.mimetype === "video/webm" ||
      file.mimetype === "video/ogg" ||
      file.mimetype === "video/avi"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Please upload a valid video file"));
    }
  },
});

module.exports = upload;
