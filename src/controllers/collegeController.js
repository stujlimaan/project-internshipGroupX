const { find } = require("../models/collegeModel");
const CollegeModel=require("../models/collegeModel")
const InternModel=require("../models/internModel")
const validator=require("../validator/validator")


const createCollege=async function(req,res){
    try{
        let  data=req.body;
        
        let {name,fullName,logoLink}=data
        if(Object.keys(data).length==0){
            return res.status(400).send({status:false,msg:"please provide details"})
        }
       
        if(!validator.isValid(name)){
            return res.status(400).send({status:false,msg:"please provide name"})
        }

        if(!validator.isValid(fullName)){
            return res.status(400).send({status:false,msg:"please provide full name"})
        }

        if(!validator.isValid(logoLink)){
            return res.status(400).send({status:false,msg:"please provide logolink"})
        }

        let uniName=await CollegeModel.find({name:name})

        if(Object.keys(uniName).length > 0){
            return res.status(403).send({status:false,msg:"please create unique college it is already have"})
        }

        let savaData=await CollegeModel.create(data)
        res.status(201).send({status:true,msg:"successfully college created",data:savaData})
    }catch(err){
        return res.status(500).send({status:false,msg:err.message })
    }
}

const getCollegeDetails=async function(req,res){
    try{

        let data=req.query.collegeName
        let collegeName=data.toLowerCase()
        if(Object.keys(data).length==0){
            return res.status(400).send({status:false,msg:"please provide college name"})
        }

        let findData=await CollegeModel.findOne({name:collegeName})
        if(!findData){
            return res.status(404).send({status:false,msg:"No college found"})
        }
        let name=findData.name
        let fullName=findData.fullName
        let logoLink=findData.logoLink
        let collegeId=findData._id
        
        let interests=await InternModel.find({collegeId:collegeId}).select({_id:1,email:1,mobile:1,name:1})

        let obj={name,fullName,logoLink,interests}
        console.log(obj)
        res.status(200).send({status:true,data:obj})
    }catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports.createCollege=createCollege
module.exports.getCollegeDetails=getCollegeDetails