const router=require("express").Router()
const userService=require("../service/user")
router.post("/regist",async (req,res,next) => {
    await userService.regist(req.body)
    res.success()
})

router.get("/:username",async (req,res,next) => {
    let data=await userService.getUser(req.params.username)
    res.success(data)
})

router.post("/login",async (req,res,next) => {
    let token=await userService.login(req.body)
    res.success(token)
})

router.delete("/:id",async (req,res,next) => {
    await userService.deleteUser(req.params.id)
    res.success()
})
module.exports=router
