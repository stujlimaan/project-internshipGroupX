const InternModel=require("../models/internModel")

const CreateIntern=async function(req,res){
    try{
        let data = req.body
        let savaData=await InternModel.create(data)
        res.status(201).send({status:true,msg:"successfully created",data:savaData})

    }catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports.CreateIntern =CreateIntern
