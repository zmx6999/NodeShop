const order=require("../model/order")
const productService=require("./product")
const big=require("big-js")

async function addOrder(data) {
    let product=await productService.getProduct(data.product_id)
    if (!product) throw Error("product not exist")
    if (product.stock<data.count) throw Error("product not enough")
    data.total_price=big(product.price).times(data.count)
    data.created=Date.now()
    await order.create(data)
    product.stock-=data.count
    await productService.updateProduct({_id:product._id},product)
}

async function getOrders(page=0) {
    return await order.find().limit(2).skip(2*page).sort("-created").select("-__v")
}

async function getOrder(id) {
    return await order.findOne({_id:id})
}

module.exports={
    addOrder,getOrders,getOrder
}
