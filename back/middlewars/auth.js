const jwt = require("jsonwebtoken");
const Student= require("../models/Student.schema")
const Instructor= require("../models/Instructor.schema")
const Admin= require("../models/Admin.schema")

const protect = async (req, res, next) => {
  let token;
  const authorizationToken=req.headers.authorization
  console.log(authorizationToken);
  if (
    authorizationToken &&
    authorizationToken.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = authorizationToken.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SEC);
      console.log(decoded);

      // get the user from the token
      const role= decoded.role
      let model
      if(role === "Student"){
        model=Student
      } 
      else if(role=== "Instructor"){
        model=Instructor
      }
      else{
        model=Admin
      }
      // this middleware will return req.user which contain all about the logged current user
      req.user = await model.findById(decoded.id);


      next();
    } catch (error) {
      console.log(error);
      res.status(401).json("Not Authorized");
    }
  }
  if (!token) {
    res.status(401).json("Not token!" )
  }
};

module.exports = protect;
