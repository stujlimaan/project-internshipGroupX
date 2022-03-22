const mongoose =require("mongoose")
const isValid=function(value){
    if(typeof value === "undefined" || value === "null") return false
    if(typeof value === "string" && value.trim().length===0) return false
    return true
}


const isValidObjectId=function(objectId){
    return mongoose.Types.isValid(objectId)
}

module.exports={isValid,isValidObjectId}