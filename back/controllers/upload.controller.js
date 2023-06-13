

const ffmpeg = require("fluent-ffmpeg");



function getVideoDuration(path) {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(path, (err, metadata) => {
        if (err) {
          reject(err);
        }
        resolve(metadata.format.duration);
      });
    });
  }
  
  function bytesToMB(sizeInBytes) {
    const sizeInMB = sizeInBytes / 1024 / 1024;
    return sizeInMB.toFixed(1);
  }
  

const uploadvideo= async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json("No files uploaded");
    }

    const validMime = [
      "video/mp4",
      "video/x-flv",
      "video/mkv",
      "video/x-ms-wmv",
      "video/x-msvideo",
      "video/quicktime",
      "application/x-mpegURL"
    ];
    
    const uploadedVideos = [];
    
    
  
    const video = req.files.video;
      const videoName = Date.now() + video.name;
      const mimevideo = video.mimetype;

      if (validMime.includes(mimevideo)) {
        video.mv(
          `C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/videos/${videoName}`,
          async (err) => {
            if (err) {
              console.error(err);
              return res.status(500).send(err);
            }

            try {
              const duration = await getVideoDuration(
                `C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/videos/${videoName}`
              );

              uploadedVideos.push({
                videoCourseName: videoName,
                videoCoursePath: `/uploads/videos/${videoName}`,
                duration:(duration/60).toFixed(2),
                size: bytesToMB(video.size)
              });

              
                res.status(200).json(uploadedVideos);
            
            } catch (error) {
              console.error(error);
              return res.status(500).send(error);
            }
          }
        );
      } else {
        return res.status(400).json("Try a valid video format!");
      }
    }

const uploadvideos=  async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json("No files uploaded");
    }

    const videos = req.files.videos;
    const validMime = [
      "video/mp4",
      "video/x-flv",
      "video/mkv",
      "video/x-ms-wmv",
      "video/x-msvideo",
      "video/quicktime",
      "application/x-mpegURL",
    ];

    const uploadedVideos = [];

    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      const videoName = Date.now() + video.name;
      const mimevideo = video.mimetype;

      if (validMime.includes(mimevideo)) {
        video.mv(
          `C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/videos/${videoName}`,
          async (err) => {
            if (err) {
              console.error(err);
              return res.status(500).send(err);
            }

            try {
              const duration = await getVideoDuration(
                `C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/videos/${videoName}`
              );

              uploadedVideos.push({
                videoCourseName: videoName,
                videoCoursePath: `/uploads/videos/${videoName}`,
                duration:(duration/60).toFixed(2),
                size: bytesToMB(video.size)
              });

              if (uploadedVideos.length === videos.length) {
                res.status(200).json(uploadedVideos);
              }
            } catch (error) {
              console.error(error);
              return res.status(500).send(error);
            }
          }
        );
      } else {
        return res.status(400).json("Try a valid video format!");
      }
    }
  }


const uploadimage=  (req, res) => {
    if (req.files === null) {
      return res.status(400).json("No file uploaded");
    }
  
    const image = req.files.image;
    const imageName = Date.now() + image.name;
    const mimeImage = image.mimetype;
    const validMime = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp"
    ];
  
    if (validMime.includes(mimeImage)) {
      image.mv(
        `C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/courseImages/${imageName}`,
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res
            .status(200)
            .json({
              imageCourseName: image.name,
              imageCoursePath: `/uploads/courseImages/${imageName}`,
            });
        }
      );
    } else {
      res.status(400).json("Try a valid image format !");
    }
  }
const uploadimageProfile=  (req, res) => {
    if (req.files === null) {
      return res.status(400).json("No file uploaded");
    }
  
    const image = req.files.image;
    const imageName = Date.now() + image.name;
    const mimeImage = image.mimetype;
    const validMime = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp"
    ];
  
    if (validMime.includes(mimeImage)) {
      image.mv(
        `C:/Users/MSI/Desktop/e-learning platform/front/public/uploads/profileImages/${imageName}`,
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res
            .status(200)
            .json({
              imageCourseName: image.name,
              imageCoursePath: `/uploads/profileImages/${imageName}`,
            });
        }
      );
    } else {
      res.status(400).json("Try a valid image format !");
    }
  }


module.exports={
    uploadvideo,
    uploadvideos,
    uploadimage,
    uploadimageProfile
}