const router=require("express").Router()
const categoryService=require("../service/category")
router.post("/",async (req,res,next) => {
    await categoryService.addCategory(req.body)
    res.success()
})

router.get("/",async (req,res,next) => {
    let data=await categoryService.getCategories(req.query.page)
    res.success(data)
})

router.put("/:id",async (req,res,next) => {
    await categoryService.updateCategory(req.params.id,req.body)
    res.success()
})

router.delete("/:id",async (req,res,next) => {
    await categoryService.deleteCategory(req.params.id)
    res.success()
})
module.exports=router
