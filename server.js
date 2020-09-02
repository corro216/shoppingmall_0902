

const express = require('express')
const app = express()


app.use((req, res) => {
    res.json({
        message: "data success get"
    })
})



const port = 1004


app.listen(port, console.log("server started"))