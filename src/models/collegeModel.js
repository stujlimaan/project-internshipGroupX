const mongoose=require("mongoose")

const CollegeSchema= new mongoose.Schema({

    name:{
        type:String,
        required:"name is required",
        trim:true,
        unique:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:"full name is required"
    },
    logoLink:{
        type:String,
        required:"please provide link"
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model("College",CollegeSchema)