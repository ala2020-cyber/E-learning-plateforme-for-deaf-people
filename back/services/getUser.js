


const getUser= async (req,res,model) => {
    try {
        const user= await model.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports= getUser