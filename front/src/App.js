import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Common/Home";
import Course from "./pages/Etudiant/Course";
import Courses from "./pages/Etudiant/Courses";
import Instructor from "./pages/Formateur/Instructor";
import Instructors from "./pages/Formateur/Instructors";
import About from "./pages/Common/About";
import Signin from "./pages/Common/Signin";
import Register from "./pages/Etudiant/Register";
import CourseEnrolled from "./pages/Etudiant/CourseEnrolled";
import HistoriqueEtudiant from "./pages/Etudiant/HistoriqueEtudiant";
import StatisticRecherche from "./pages/Etudiant/StatisticRecherche";
import AddCourse from "./pages/Formateur/AddCourse";
import ProfileFormateur from "./pages/Formateur/ProfileFormateur";
import ProfileStudent from "./pages/Etudiant/ProfileStudent";
import EditCourse from "./pages/Formateur/EditCourse";
import EditLesson from "./pages/Formateur/EditLesson";
import EditProfileFormateur from "./pages/Formateur/EditProfileFormateur";
import EditPhoto from "./pages/Formateur/EditPhoto";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Historique_formateur from "./pages/Formateur/Historique_formateur";
import BecomeInstructor from "./pages/Formateur/BecomeInstructor";
import AddLesson from "./pages/Formateur/AddLesson";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />

          {/* les interfaces d'étudiant sourd */}
          <Route path="/courses" element={<Courses />} />
          <Route index path="/course/:id" element={<Course />} />
          <Route index path="/instructors" element={<Instructors />} />
          <Route index path="/instructor" element={<Instructor />} />
          <Route index path="/enroll/:id" element={<CourseEnrolled />} />
          <Route index path="/historique" element={<HistoriqueEtudiant />} />
          <Route index path="/stat" element={<StatisticRecherche />} />
          <Route
            index
            path="/profile/etudiant/:id"
            element={<ProfileStudent />}
          />

          {/* Les interfaces  la formateur */}
          <Route index path="/formateur" element={<AddCourse />} />
          <Route index path="/editCourse" element={<EditCourse />} />
          <Route index path="/addLesson" element={<AddLesson />} />
          <Route index path="/editLesson" element={<EditLesson />} />
          <Route
            index
            path="/profile/formateur/:id"
            element={<ProfileFormateur />}
          />
          <Route
            index
            path="/formateur/editProfile/:id"
            element={<EditProfileFormateur />}
          />
          <Route index path="/profile/editPhoto/:id" element={<EditPhoto />} />
          <Route
            index
            path="/historique/formateur/:id"
            element={<Historique_formateur />}
          />
          <Route
            index
            path="/BecomeInstructor"
            element={<BecomeInstructor />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
