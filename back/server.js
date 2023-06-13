const express = require("express");
const app = express();
const connectDb = require("./middlewars/db");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const fileUpload = require("express-fileupload");
//integration back front
var corsOption = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

// CONNECTING THE MONGODB DATABASE
connectDb();

// middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(fileUpload());

// ROUTES
app.use("/students", require("./routes/student.route"));
app.use("/instructors", require("./routes/instructor.route"));
app.use("/admin", require("./routes/admin.route"));
app.use("/courses", require("./routes/course.route"));
app.use("/categories", require("./routes/catégorie.route"));
app.use("/lessons", require("./routes/lesson.route"));
app.use("/videos", require("./routes/video.route"));
app.use("/enrolled", require("./routes/inscrire.route"));
app.use("/notes", require("./routes/notes.route"))
app.use('/historique/formateur', require("./routes/historique_formateur.route"))

//upload
app.use("/", require("./routes/upload.route"));

// transcription
app.use("/", require("./routes/transcribe.route"))

// generate pdf
app.use("/",require("./routes/generatePdf.route"))



//  run the app on a port
const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`backend server is running on port ${Port}!`);
});
