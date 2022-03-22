const validator=require("../validator/validator")
const InternModel=require("../models/internModel")
const CreateIntern=async function(req,res){
    try{
        let data = req.body
        let {name,email,mobile,collegeId}=data

        if(Object.keys(data).length==0){
            return res.status(400).send({status:false,msg:"please provide some details"})
        }

        if(!validator.isValid(name)){
            return res.status(400).send({status:false,msg:"please provide name"})
        }
        if(!validator.isValid(email)){
            return res.status(400).send({status:false,msg:"please provide email"})
        }

        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return res.status(400).send({status: false, message: `${email} is not a valid email.`});
        }

        let uniqEmail=await InternModel.find({email:email})
        if(Object.keys(uniqEmail).length>0){
            return res.status(400).send({status:false,msg:`${email} already used`})
        }
        if(!validator.isValid(mobile)){
            return res.status(400).send({status:false,msg:"please provide mobile"})
        }

        mobile.length<10 && mobile.length<11
        if(/\d{10}/.test(mobile)){
            return res.status(400).send({status:false,msg:"please provide 10 digits number"})
        }

        let uniqMobile=await InternModel.find({mobile:mobile})
        console.log(uniqMobile)

        if(Object.keys(uniqMobile).length > 0){
            return res.status(400).send({status:false,msg:`${mobile} number already used`})
        }

        if(!validator.isValid(collegeId)){
            return res.status(400).send({status:false,msg:"please provide collegeId"})
        }

        if(!validator.isValidObjectId(collegeId)){
            return res.status(400).send({status:false,msg:`${collegeId} is not valid`})
        }
        let saveData=await InternModel.create(data)
        res.status(201).send({status:true,msg:"successfully created",data:saveData})

    }catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports.CreateIntern =CreateIntern
