const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,      //빈칸 없애주기
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    role:{
        type:Number,
        default:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

const User = mongoose.model('User',userSchema) // 스키마를 모델로 가둬주기

module.exports={ User }
