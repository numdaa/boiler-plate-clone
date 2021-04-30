const express = require('express') // express 모듈 가져오기
const app=express()
const port=5000 // 포트5000번으로 서버
const mongoose = require('mongoose')
const bodyParser=require('body-parser');
const { User }=require("./models/User");

const config=require('./config/key');

//application/x-www-form-urlencoded 분석
app.use(bodyParser.urlencoded({extended: true}));
//application/json 분석
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://Doyeong:123456789a@boilerplate.7tdjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('Hello World!~~ 오늘도 화이팅 아자아자')) // '/' ->루트 디렉토리 의미


app.post('/register',(req,res)=>{
    
    const user= new User(req.body);
    user.save((err,userInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({success:true}) // status(200) 성공했다는 의미
    })
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
})






app.listen(port,()=>console.log(`Example app listening on port ${port}!`))