import axios from "axios";

const base_url = "http://localhost:5000/";

const registerStudent = async (userData) => {
  const response = await axios.post(base_url + "students/register", userData);
  return response.data;
};
const registerInstructor = async (userData) => {
  const response = await axios.post(
    base_url + "instructors/register",
    userData
  );
  return response.data;
};

const loginStudent = async (userData) => {
  const response = await axios.post(base_url + "students/login", userData);

  if (response.data) {
    localStorage.setItem("student", JSON.stringify(response.data));
  }

  return response.data;
};
const loginInstructor = async (userData) => {
  const response = await axios.post(base_url + "instructors/login", userData);

  if (response.data) {
    localStorage.setItem("instructor", JSON.stringify(response.data));
  }

  return response.data;
};

const logoutStudent = () => {
  localStorage.removeItem("student");
};
const logoutInstructor = () => {
  localStorage.removeItem("instructor");
  localStorage.removeItem("courses");
};

const addCourse = async (userData, token) => {
  const response = await axios.post(base_url + "courses", userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const deleteCourse = async (courseId, token) => {
  const response = await axios.delete(base_url + "courses/" + courseId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const getCourses = async (token) => {
  const response = await axios.get(base_url + "courses/InstructorCourses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};



// update course

const updateCourse = async (courseId, courseData,token) => {
  const response = await axios.put(
    base_url + "courses/" + courseId,
    courseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// add lesson
const addLesson = async (lessonData) => {
  const response = await axios.post(base_url + "lessons", lessonData);

  return response.data;
};


// delete lesson
const deleteLesson = async (lessonID, token) => {
  const response = await axios.delete(base_url + "lessons/" + lessonID, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};



// add note
const addNote = async (noteData) => {
  const response = await axios.post(base_url + "notes", noteData);

  return response.data;
};


// delete note
const deleteNote = async (lessonID, token) => {
  const response = await axios.delete(base_url + "notes/" + lessonID, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


const authService = {
  registerStudent,
  registerInstructor,
  loginStudent,
  loginInstructor,
  logoutStudent,
  logoutInstructor,
  addCourse,
  getCourses,
  deleteCourse,
  updateCourse,
  addLesson,
  deleteLesson,

  addNote,
  deleteNote
};

export default authService;
