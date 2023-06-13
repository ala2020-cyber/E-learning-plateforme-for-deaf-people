const bcrypt = require("bcrypt");

const gnerateToken = require("./gnerateToken")

const loginUser = async (req, res, model) => {
  const { Email, mot_de_passe } = req.body;
  
  const user = await model.findOne({ Email });
  
  if(user) {
    
    // check is the password is match with the real one

        if(await bcrypt.compare(mot_de_passe, user.mot_de_passe)){
          
          res.status(200).json({
            id:user.id,
            Nom:user.Nom,
            Prenom:user.Prenom,
            Email:user.Email,
            Telephone:user.Telephone,
            TitreProffessionel:user.TitreProffessionel,
            LiensSociaux:user.LiensSociaux,
            ImageProfil:user.ImageProfil,
            role:user.role,
            Description:user.Description,
            Status:user.Statut,
            listeFavoris:user.listeFavoris,

            token: gnerateToken(user.id,user.role) });
        }
        else {
          res.status(400).json( "Password is incorrect !" );
        }


  }
  else {
    res.status(400).json( "User don't exist !" );
  }


  
    


};



module.exports = loginUser;
