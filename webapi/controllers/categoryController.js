let products = require('../data/database')
const express = require('express')
const controller = express()



controller.param("category", (req, res, next, category) => {

    req.products = products.filter(x => x.category == category)
    next()
})


controller.route('/:category').get((req, res) => {

    if (req.products != undefined)
        res.status(200).json(req.products)
    else
        res.status(404).json()
})


controller.route('/:category/:take').get((req, res) => {
    let list = []

    for (let i = 0; i < Number(req.params.take); i++)
        list.push(req.products[i])

    res.status(200).json(list)
})

// controller.route('/').get((req, res) => {
//     res.status(200).json(products)
// })

module.exports = controller
