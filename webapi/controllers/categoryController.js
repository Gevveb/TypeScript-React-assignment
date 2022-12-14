// const express = require('express')
// const controller = express.Router()
// const ProductSchema = require('../schemas/productSchema')

// // let products = require('../data/database')
// // const ProductSchema = require('../schemas/productSchema')
// // const express = require('express')
// // const controller = express()



// // controller.param("category", (req, res, next, category) => {

// //     req.products = ProductSchema.filter(x => x.category == category)
// //     next()
// // })

// controller.route('/').get(async (req, res) => {
//     const products = []
//     const list = await ProductSchema.find()
//     if (list) {
//         for (let product of list) {
//             products.push({
//                 tag: product.tag,
//                 articleNumber: product._id,
//                 name: product.name,
//                 description: product.description,
//                 category: product.category,
//                 price: product.price,
//                 rating: product.rating,
//                 imageName: product.imageName
//             })
//         }
//         res.status(200).json(products)
//     } else
//         res.status(400).json()

//     // try {
//     //     const products = await ProductSchema.find()
//     //     res.status(200).json(products)
//     // } catch {
//     //     res.status(400).json()
//     // }
// })

// controller.route('/:category').get(async (req, res) => {

//     const products = []
//     const list = await ProductSchema.find({ category: req.params.category })
//     if (list) {
//         for (let product of list) {
//             products.push({
//                 tag: product.tag,
//                 articleNumber: product._id,
//                 name: product.name,
//                 description: product.description,
//                 category: product.category,
//                 price: product.price,
//                 rating: product.rating,
//                 imageName: product.imageName
//             })
//         }
//         res.status(200).json(products)
//     } else
//         res.status(400).json()
// })


// controller.route('/:category/:take').get( async(req, res) => {
//     const products = []
//     const list = await ProductSchema.find({ category: req.params.category }).limit(req.params.take)
//     if (list) {
//         for (let product of list) {
//             products.push({
//                 tag: product.tag,
//                 articleNumber: product._id,
//                 name: product.name,
//                 description: product.description,
//                 category: product.category,
//                 price: product.price,
//                 rating: product.rating,
//                 imageName: product.imageName
//             })
//         }
//         res.status(200).json(products)
//     } else
//         res.status(400).json()
// })

// controller.route('/').get((req, res) => {
//     res.status(200).json(products)
// })

//  module.exports = controller


// controller.param("category", (req, res, next, category) => {

//     req.products = products.filter(x => x.category == category)
//     next()
// })


// controller.route('/:category').get((req, res) => {

//     if (req.products != undefined)
//         res.status(200).json(req.products)
//     else
//         res.status(404).json()
// })


// controller.route('/:category/:take').get((req, res) => {
//     let list = []

//     for (let i = 0; i < Number(req.params.take); i++)
//         list.push(req.products[i])

//     res.status(200).json(list)
// })

// // controller.route('/').get((req, res) => {
// //     res.status(200).json(products)
// // })

// module.exports = controller
