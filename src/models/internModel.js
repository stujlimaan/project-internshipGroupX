const mongoose=require("mongoose");
const validator=require("validator")
const objectId=mongoose.Schema.Types.ObjectId

const InternSchema=new mongoose.Schema({
    name:{
        type:String,
        required:"intern name is required",
        unique:true,

    },
    email:{
        type:String,
        unique:true,
        required:"email is required",
        lowercase:true,
        trim:true,
        validate:{
            validator:validator.isEmail,
            message:`{VALUE} is not a valid email`,
            isAsync:false
        }
    },
    // mobile:{
    //     type:Number,
    //     required:"mobile is required",
    //     unique:true,
    //     match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    // }

    mobile: {
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
      },
      collegeId:{
        type:objectId,
        ref:"College"
      },
      isDeleted:{
          type:Boolean,
          default:false
      }
})