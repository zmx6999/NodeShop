const user=require("../model/user")
const crypto=require("lxj-crypto")
const config=require("../config")
async function regist(data) {
    let t=await user.findOne({username:data.username})
    if (t) throw Error("user exist")
    if (!data.password || data.password.length<1) throw Error("password can not be empty")
    data.password=crypto.md5Hmac(data.password,data.username)
    data.created=Date.now()
    await user.create(data)
}

async function getUser(username) {
    return await user.findOne({username:username}).select(["username","usertype","created","_id"])
}

async function login(data) {
    data.password=crypto.md5Hmac(data.password,data.username)
    let t=await user.findOne({username:data.username,password:data.password})
    if (!t) throw Error("username or password error")
    let tokenData={
        username:data.username,
        expire:Date.now()+80000
    }
    return crypto.aesEncrypt(JSON.stringify(tokenData),config.KeyAES)
}

async function deleteUser(id) {
    await user.deleteOne({_id:id})
}
module.exports={
    regist,getUser,login,deleteUser
}
