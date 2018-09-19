const category=require("../model/category")
async function addCategory(data) {
    data.created=Date.now()
    await category.create(data)
}

async function getCategories(page=0) {
    return await category.find().limit(5).skip(5*page).sort("-created")
}

async function updateCategory(id,data) {
    await category.updateOne({_id:id},data)
}

async function deleteCategory(id) {
    await category.deleteOne({_id:id})
}

module.exports={
    addCategory,getCategories,updateCategory,deleteCategory
}
