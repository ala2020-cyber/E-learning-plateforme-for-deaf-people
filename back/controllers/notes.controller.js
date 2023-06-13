
const Notes= require("../models/Notes.schema")

const createNote   = async (req,res) => {

    try {
        const newNote= await Notes.create({
            studentID:req.body.studentID,
            courseID:req.body.courseID,
            note:req.body.note
          })

          res.status(200).json(newNote)
    } catch (err) {
        res.status(500).json("Server problem!");
        console.log(err)
        
    }
}
const getAllNotes  = async (req,res) => {
    try {
        const notes= await Notes.find();
        res.status(200).json(notes)
    } catch (err) {
        res.status(500).json("Server problem!");
        console.log(err)
        
    }

}
const updateNote  = async (req,res) => {

   try {
     const updatedNote= await Notes.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new:true}
     )
     res.status(200).json(updatedNote);
   } catch (err) {
    res.status(500).json("Server problem!");
    console.log(err)
    
   }


}
const deleteNote  = async (req,res) => {
   try {
      await Notes.findByIdAndDelete(req.params.id);
      res.status(200).json("Course deleted")
   } catch (err) {
    res.status(500).json("Server problem!");
    console.log(err)
   }
}
const getNote = async (req,res) => {

    try {
        const note= await Notes.findById(req.params.id);

        res.status(200).json(note)
    } catch (err) {
        res.status(500).json("Server problem!");
        console.log(err)
    }
}



  



module.exports={
    createNote,
    getAllNotes,
    updateNote,
    deleteNote,
    getNote
}