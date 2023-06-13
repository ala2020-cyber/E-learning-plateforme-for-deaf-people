

const findUser=  async(req,res,model) => {
 const Email=req.body.Email
    const user= await model.findOne({Email})

    if(!user){
       res.status(400).json("don't exist")
    }
    else{
        res.status(400).json("exist")
    }
   
}


module.exports= findUser