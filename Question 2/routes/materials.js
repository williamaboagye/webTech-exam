const express = require('express')
const router = express.Router()
const Materials = require

//Getting All
router.get('/', async (req, res) => {
    try {
        const materials = await Materials.find()
        res.json(materials)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

})
//Getting One 
router.get('/:id', (req, res) => {
    res.send(req.params)
})

//Creating one
router.post('/', async (req, res) => {
 const material = new Material({
    name: req.body.name,
    materialUnitPrice:
    req.body.materialUnitPrice
 })
 try {
     const newMaterial = await material.save()
     res.status(201).json(newMaterial)
 }   catch (err) {
     res.status(400).json({ message: err.message })
 }
    
})

//Update One
router.patch('/:id', getMaterial, async (req, res) => {
    if (req.body.name != null) {
        res.material.name = req.body.name
    }
    if (req.body.materialUnitPrice != null) {
        res.material.materialUnitPrice = req.body.materialUnitPrice
    }
    try {
        const updateMaterial = await res.material.save()
        res.json(updatedMaterial)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }  
})


//Deleting One
router.delete('/:id', getMaterial, async (req, res) => {
    try {
        await res.material.remove()
        res.json({ message: 'Deleted Material'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    } 
})

async function getMaterial(req, res, next) {
    let material
    try {
        material = await Material.findById(req.params.id)
        if (material == null) {
            return res.status(404).json({ message: 'Cannot find material'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.material = material
    next()
}

module.exports = router 
