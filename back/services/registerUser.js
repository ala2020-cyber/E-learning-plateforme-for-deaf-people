const bcrypt = require("bcrypt");
const gnerateToken = require("./gnerateToken")

const registerUser = async (req, res, model) => {

  const { Email} = req.body;
  
  const user = await model.findOne({ Email });
  if(user) {
    res.status(400).json( "Email already used !" );
  }
  else{

    // create a user
    try {
      req.body.mot_de_passe = bcrypt.hashSync(req.body.mot_de_passe, 10);
      const newUser = await model.create(req.body);
      
        res.status(201).json({ 
          id: newUser.id,
          Nom:newUser.Nom,
          Prenom:newUser.Prenom,
          role:newUser.role,
          Email:newUser.Email,
          token: gnerateToken(newUser.id, newUser.role) 
      });

    } catch (error) {
     res.status(404).json(error)
    }
   

  }
    
    
  }


module.exports = registerUser;
