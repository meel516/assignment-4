let express=require('express')
const bodyParser = require('body-parser');
let app=express()
app.use(bodyParser.json()); // for parsing JSON data
app.use(bodyParser.urlencoded({ extended: true })); // for parsing URL-encoded data


app.get('/',(req,res)=>res.end('welcome'))
app.listen(4000,(re1,res)=>console.log('listening on port 4000'))
app.post('/add',(req,res)=>{
    console.log(req.body)
    let num1=req.body.num1
    let num2=req.body.num2
    res.status(201).json(
       { status: "success",
        message: "the sum of given two numbers",
        sum: num1+num2 }
       
       
    )
})