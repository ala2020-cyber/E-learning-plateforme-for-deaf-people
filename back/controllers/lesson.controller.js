const Lesson = require("../models/Lesson.schema");

const postLesson = async (req, res) => {
  const newCourse = new Lesson(req.body);

  try {
    const newLesson = await newCourse.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(500).json(err);
  }
};





const updateLesson = async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedLesson);
  } catch (err) {
    res.Status(500).json(err);
  }
};

const deleteLesson = async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.status(200).json("lesson has been deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id).populate(
      "Video"
    );
    res.status(200).json(lesson);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getAllLesson = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
    postLesson,
    updateLesson,
    deleteLesson,
    getLesson,
    getAllLesson,
};
