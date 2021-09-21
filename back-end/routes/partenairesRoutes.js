const express = require("express")
const router = express.Router()
const { getPartenaires , findPartenairesById, updatePartenaire, deletePartenaire, addNewPartenaire  } = require("../controllers/partenairesController")
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });

router.get('/', getPartenaires)
router.post('/', upload.single("image"), addNewPartenaire )
router.get("/:id", findPartenairesById)
router.delete('/:id/deletePartenaire',deletePartenaire)
router.patch('/:id/updatePartenaire',upload.single("image"),updatePartenaire)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
