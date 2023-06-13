

const deleteUser= async (req, res,model) => {
    try {
      const user= await model.findByIdAndDelete(req.params.id);
      res.status(200).json(`${user.role} has benn deleted successfully !`);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  module.exports= deleteUser