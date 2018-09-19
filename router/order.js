const router=require("express").Router()
const orderService=require("../service/order")
router.post("/",async (req,res,next) => {
    await orderService.addOrder(req.body)
    res.success()
})

router.get("/",async (req,res,next) => {
    let data=await orderService.getOrders(req.query.page)
    res.success(data)
})

router.get("/:id",async (req,res,next) => {
    let data=await orderService.getOrder(req.params.id)
    res.success(data)
})

module.exports=router
