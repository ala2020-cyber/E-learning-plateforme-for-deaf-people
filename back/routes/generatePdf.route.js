const router = require("express").Router()

const {
    createpdf,
    fetchPdf
}= require("../controllers/generatePdf.controller")

router.post("/createPdf",createpdf)
router.get("/fetchPdf",fetchPdf)


module.exports=router