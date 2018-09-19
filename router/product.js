const router=require("express").Router()
const productService=require("../service/product")
router.post("/",async (req,res,next) => {
    await productService.addProduct(req.body)
    res.success()
})

router.get("/",async (req,res,next) => {
    let data=await productService.getProducts(req.query.page)
    res.success(data)
})

router.put("/:id",async (req,res,next) => {
    await productService.updateProduct(req.params.id,req.body)
    res.success()
})

router.delete("/:id",async (req,res,next) => {
    await productService.deleteProduct(req.params.id)
    res.success()
})
module.exports=router
