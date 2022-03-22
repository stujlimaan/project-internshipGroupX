const express =require("express");
const router=express.Router();
const College=require("../controllers/collegeController");
const Intern=require("../controllers/internController")


router.post("/functionup/colleges",College.createCollege)
router.post("/functionup/intern",Intern.CreateIntern)
router.get("/functionup/collegeDetails",College.getCollegeDetails)


module.exports=router