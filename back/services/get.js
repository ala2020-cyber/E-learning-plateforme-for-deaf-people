


const getSomething = async (req, res,model) => {
    try {
      const thing = await model.findById(req.params.id);
      res.status(200).json(thing);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  
  module.exports= getSomething