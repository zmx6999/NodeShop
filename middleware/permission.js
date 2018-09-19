let role_permission=[
    {
        role:0,
        permission:[
            /.*\/category.*/,
            /.*\/product.*/,
            /.*\/order.*/
        ]
    },
    {
        role:1,
        permission:[
            /.*/
        ]
    }
]
module.exports=(req,res,next) => {
    if (req.user) {
        let go=false
        role_permission.forEach(v => {
            if (req.user.usertype==v.role) {
                v.permission.forEach(vv => {
                    if (vv.test(req.url)) go=true
                })
            }
        })
        if (!go) throw Error("forbidden")
    }
    next()
}
