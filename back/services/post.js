

const postSomething = async (req, res,model) => {
    try {
        const thing = await model.create(req.body)
        res.status(201).json({message:"Created successfully !",data:thing})
    } catch (error) {
        res.status(400).json({mesage:"Problem while creating, retry !", error: error})
    }
  };

  module.exports= postSomething
  