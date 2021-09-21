const express = require("express")
const router = express.Router()
const {getChiffres ,  getChiffresById , updateChiffre} = require("../controllers/chiffresController")


router.get('/', getChiffres)
router.get('/:id', getChiffresById)
router.patch('/:id/updateChiffre', updateChiffre)




router.all("*", (req,res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router