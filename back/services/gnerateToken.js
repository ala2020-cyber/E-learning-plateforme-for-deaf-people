const jwt = require("jsonwebtoken");


// Generate token
const gnerateToken = (id,role) => {
    return jwt.sign({ id,role }, process.env.JWT_SEC, {
      expiresIn: "30d",
    });
  };

  
  module.exports= gnerateToken