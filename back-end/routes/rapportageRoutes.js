const express = require("express")
const router = express.Router()
const { getRapportage , addNewRapportage,  findRapportageById  , updateRapportage , deleteRapportage  } = require("../controllers/rapportageController")
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });

router.get('/', getRapportage)
router.post('/', upload.single("pdf"), addNewRapportage )
router.get("/:id", findRapportageById)
router.delete('/:id/deleteRapportage',deleteRapportage)
router.patch('/:id/updateRapportage',upload.single("pdf"),updateRapportage)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
