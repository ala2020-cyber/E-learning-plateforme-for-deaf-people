const jwt = require("jsonwebtoken");

//  VERIFY TOKEN FOR ANY USERS
 const verifyToken = (req, res, next) => {

  // get the token from the header
  const token = req.headers.token;
  if (token) {
    // verify token 
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(403).json("EXPIRED OR WRONG TOKEN");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("NOT AUTHENTICATED");
  }
};

module.exports= verifyToken


