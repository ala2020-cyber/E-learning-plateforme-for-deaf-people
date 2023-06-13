const router= require("express").Router()

const {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote,
    getNote
}= require("../controllers/notes.controller")


router
   .route("/")
   .post(createNote)
   .get(getAllNotes)

router
   .route("/:id")
   .patch(updateNote)
   .delete(deleteNote)
   .get(getNote)


module.exports= router