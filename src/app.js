const path = require('path')
const express = require('express')
const forecast = require('./utils/order')

const app = express()
const port= process.env.PORT || 3000


app.post('/webhook', (req, res) => {
    
            order(req.body.queryResult.parameters[orderno], (error, orderdata) => {
                if (!req.body) {
                    return res.send({
                        error: 'Product is not availble !'
                    })
                }
            res.send({
                fullfilmentText: orderdata
         
            })
        })
    
})



app.listen(port, () => {
    console.log('Server is up on port ' +port)
})