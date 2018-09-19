const product=require("../model/product")

async function addProduct(data) {
    data.created=Date.now()
    await product.create(data)
}

async function getProducts(page=0) {
    return await product.find().limit(5).skip(5*page).sort("-created")
}

async function getProduct(id) {
    return await product.findOne({_id:id})
}

async function updateProduct(id,data) {
    await product.updateOne({_id:id},data)
}

async function deleteProduct(id) {
    await product.deleteOne({_id:id})
}

module.exports={
    addProduct,getProducts,getProduct,updateProduct,deleteProduct
}
