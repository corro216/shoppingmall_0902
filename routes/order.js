
// 1
const express = require('express')
const router = express.Router()

router.patch('/', (req , res) => {
    res.json({
        msg : "order data update"
    })
})

router.post('/', (req, res) => {
    res.json({
        msg : "order date create"
    })
})

router.get('/', (req, res) => {
    res.json({
        msg : "order date get"
    })
})

router.delete('/', (req, res) => {
    res.json({
        msg : "order date delete"
    })
})


// 2
module.exports = router