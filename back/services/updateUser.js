const bcrypt= require("bcrypt")


const updateUser= async (req, res,model) => {
    if (req.body.mot_de_passe) {
      req.body.mot_de_passe = bcrypt.hashSync(req.body.mot_de_passe, 10);
    }
    try {
      const updatedUser = await model.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

module.exports= updateUser