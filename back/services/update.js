


const updateSomething = async (req, res,model) => {
    try {
      const updatedthing = await model.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedthing);
    } catch (err) {
      res.Status(400).json(err);
    }
  };

  module.exports= updateSomething
  