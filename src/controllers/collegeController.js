const { find } = require("../models/collegeModel");
const CollegeModel=require("../models/collegeModel")
const InternModel=require("../models/internModel")

const createCollege=async function(req,res){
    try{
        let  data=req.body;
        let savaData=await CollegeModel.create(data)
        res.status(201).send({status:true,msg:"successfully college created",data:savaData})
    }catch(err){
        return res.status(500).send({status:false,msg:err.message })
    }
}

const getCollegeDetails=async function(req,res){
    try{

        let data=req.query
        let findData=await CollegeModel.find({data})
        res.status(200).send({status:true,data:findData})
    }catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports.createCollege=createCollege
module.exports.getCollegeDetails=getCollegeDetails