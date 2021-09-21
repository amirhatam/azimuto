const express = require("express")
const router = express.Router()
const {getCivique ,  getCiviqueById , updateCivique} = require("../controllers/civiqueController")


router.get('/', getCivique)
router.get('/:id', getCiviqueById)
router.patch('/:id/updateCivique', updateCivique)




router.all("*", (req,res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router