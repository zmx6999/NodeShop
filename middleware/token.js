const crypto=require("lxj-crypto")
const config=require("../config")
const userService=require("../service/user")
function isExcludeCheckReg(url) {
    let urls=[
        /.*\/user\/regist/,
        /.*\/user\/login/
    ]
    for (let i=0;i<urls.length;i++)
        if (urls[i].test(url)) return true
    return false
}
module.exports=async (req,res,next) => {
    if (!isExcludeCheckReg(req.url)) {
        let token=req.get("token")
        if (!token) throw Error("no token")
        let tokenData=null
        try {
            tokenData=JSON.parse(crypto.aesDecrypt(token,config.KeyAES))
        } catch (e) {
            throw Error("token invalid")
        }
        if (Date.now()>tokenData.expire) throw Error("token expire")
        let user=await userService.getUser(tokenData.username)
        if (!user) throw Error("user not exist")
        req.user=user
    }
    next()
}
