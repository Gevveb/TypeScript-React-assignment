// const express = require('express')
// const controller = express.Router()
// // let newProducts = require('../data/database')
// const ProductSchema = require('../schemas/productSchema')


// controller.param("id", (req,res,next, id) => {
//     req.newProduct = ProductSchema.find(newProduct => newProduct.id == id)
//     next()
// })



// // Post - CREAT - SKAPA EN ANVÄNDARE - http://localhost:5000/api/users


// controller.route('/')
// .post((httpRequest, httpResponse) => {
//     let newProduct = {
//         id: (newProducts[newProducts.length -1])?.id > 0 ? (newProducts[newProducts.length -1])?.id + 1 : 1,
//         name: httpRequest.body.name,
//         category: httpRequest.body.category,
//         price: httpRequest.body.price,
//         imageName: httpRequest.body.imageName
//     }

//     newProducts.push(newProduct)
//     httpResponse.status(201).json(newProduct)
// })

// // Get - READ - HÄMTA ALLA ANVÄNDARE - http://localhost:5000/api/users

// .get((httpRequest, httpResponse) => {
//     httpResponse.status(200).json(newProducts)
// })


// // ............

// controller.route("/:articleNumber")
// .get((httpRequest, httpResponse) => {
//     if (httpRequest.newProduct != undefined)
//         httpResponse.status(200).json(httpRequest.newProduct)
//     else
//         httpResponse.status(404).json()
// })
// .put((httpRequest, httpResponse) => {
//     if (httpRequest.newProduct != undefined){

//         newProducts.forEach(newProduct => {
//             if(newProduct.id == httpRequest.newProduct.id){
//                 newProduct.name = httpRequest.body.name ? httpRequest.body.name : newProduct.name
//                 newProduct.category = httpRequest.body.category ? httpRequest.body.category : newProduct.category
//                 newProduct.price = httpRequest.body.price ? httpRequest.body.price : newProduct.price
//                 newProduct.imageName = httpRequest.body.imageName ? httpRequest.body.imageName : newProduct.imageName
//             }    
//         })
//         httpResponse.status(200).json(httpRequest.newProduct)
//     }
//     else
//         httpResponse.status(404).json()
// })
// .delete((httpRequest, httpResponse) => {
//     if (httpRequest.newProduct != undefined) {
//         newProducts = newProducts.filter(newProduct => newProduct.id !== httpRequest.newProduct.id)
//         httpResponse.status(204).json()
//     }
       
//     else
//         httpResponse.status(404).json()
// })




// module.exports = controller