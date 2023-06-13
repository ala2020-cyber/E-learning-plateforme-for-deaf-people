



const getAllSomething = async (req, res,model) => {
    try {
      const videos = await model.find().sort({ createdAt: -1 });
      res.status(200).json(videos);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  
  module.exports= getAllSomething