const Course = require("../models/Course.schema");


const postCourse = async (req, res) => {
  const role = req.user.role;
  const courseTitle = req.body.Titre;

  if (role === "Instructor") {
    if (await Course.findOne({ Titre: courseTitle })) {
      res.status(400).json("Title exist, try another!");
    } else {
      try {
        const newCourse = await Course.create({
          Titre: req.body.Titre,

          formateur: req.body.formateur,

          Description: req.body.Description,

          categorie: req.body.categorie,

          niveauFormation: req.body.niveauFormation,

          Langue: req.body.Langue,

          NombreParticipants: req.body.NombreParticipants,

          prerequisFormation: req.body.prerequisFormation,

          imageCoursePath: req.body.imageCoursePath,
        });
        res.status(200).json(newCourse);
      } catch (error) {
        res.status(500).json("Server problem!");
        console.log(error);
      }
    }
  } else {
    res.status(400).json("You are not an instructor (NOT AUTHORIZED) !");
  }
};


const deleteCourse = async (req, res) => {
  const role = req.user.role;

  if (role === "Instructor") {
  
      try {
        await Course.findByIdAndDelete(req.params.id);
        res.status(200).json("Course deleted !");
      } catch (err) {
        res.status(500).json("Server problem!");
      }
  } else {
    res.status(401).json("NOT AUTHORIZED !");
  }
};


const updateCourse = async (req, res) => {
  const role = req.user.role;

  if (role === "Instructor") {
    try {
      const updatedProduct = await Course.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedProduct);
      console.log("updated: ", updateCourse);
    } catch (err) {
      res.status(400).json("problem with server");
      console.log(err);
    }
  } else {
    res.status(400).json("NOT AUTHORIZED !");
  }
};



// GET COURSE
const getCourse = async (req, res) => {
  try {
    const product = await Course.findById(req.params.id).populate("formateur");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL COURSES
const getAllCourse = async (req, res) => {
  const qNew = req.query.new;
  const qCategories = req.query.categories;
  try {
    let products;
    if (qNew) {
      products = await Course.find()
        .populate("fomateur")
        .sort({ createdAt: -1 })
        .limit(5);
    } else if (qCategories) {
      products = await Course.find({
        categories: {
          $in: [qCategories],
        },
      });
    } else {
      products = await Course.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

// courses related to specifec instructor

const getCourseFormateur = async (req, res) => {
  // const role = req.user.role;

  // if (role === "Instructor") {
    try {
        const instructorCourses= await Course.find({formateur:req.body.formateur})
    
      res.status(200).json(instructorCourses);
    } catch (err) {
      res.status(400).json("problem with server");
      console.log(err);
    }
  // } else {
  //   res.status(400).json("NOT AUTHORIZED !");
  // }
};

module.exports = {
  postCourse,
  updateCourse,
  deleteCourse,
  getCourse,
  getAllCourse,
  getCourseFormateur,
};
