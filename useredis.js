require("./db")
let product=require("./model/product")
let redis=require("redis")
let client=redis.createClient("redis://127.0.0.1:6379")
async function prepareHotData() {
    let data=await product.find()
    data=data.reverse()
    data.forEach(v => client.lpush("product",JSON.stringify(v)))
}
//prepareHotData()
let util=require("util")
let exists=util.promisify(client.exists).bind(client)
let lrange=util.promisify(client.lrange).bind(client)
async function getProduct(page=0) {
    let hasProduct=await exists("product")
    if (hasProduct==1) {
        let r=await lrange("product",5*page,5*page+4)
        console.log(r)
    }
}
getProduct()
