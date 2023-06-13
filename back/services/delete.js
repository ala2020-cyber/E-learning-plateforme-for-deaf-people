

const deleteSomething = async (req, res,model) => {
    try {
      await model.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully !");
    } catch (err) {
      res.status(400).json(err);
    }
  };



  module.exports= deleteSomething
  