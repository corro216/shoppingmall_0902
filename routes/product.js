

const express = require('express')
const router = express.Router()



// Create(post)-Read(get)-Update(put or patch)-Delete(delete)


// product data create
router.post('/', (req, res) => {
    res.json({
        msg : "product data create"
    })
})


// product data get
router.get('/', (req, res) => {
    res.json({
        msg : "product data get"
    })

})

// product data update
router.patch('/', (req, res) => {
    res.json({
        msg : "product data update"
    })
})


// product data delete
router.delete('/', (req, res) => {
    res.json({
        msg : "product data delete"
    })
})




module.exports = router