const express = require('express') // express 모듈 가져오기
const app=express()
const port=5000 // 포트5000번으로 서버
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Doyeong:123456789a@boilerplate.7tdjt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('Hello World!~~')) // '/' ->루트 디렉토리 의미

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))