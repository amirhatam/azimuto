const express = require("express")
const router = express.Router()
const {getParcour ,  getParcourById , updateParcour} = require("../controllers/parcourController")


router.get('/', getParcour)
router.get('/:id', getParcourById)
router.patch('/:id/updateParcour', updateParcour)




router.all("*", (req,res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router