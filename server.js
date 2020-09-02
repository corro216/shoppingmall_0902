

const express = require('express')
const app = express()


// app.use((req, res) => {
//     res.json({
//         message: "data success get"
//     })
// })

const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')


app.use('/product', productRoute)
app.use('/order', orderRoute)

const port = 1004


app.listen(port, console.log("server started"))