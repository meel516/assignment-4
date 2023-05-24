let express=require('express')
let app=express()
app.get('/',(req,res)=>res.end('welcome'))
app.listen(4000,(re1,res)=>console.log('listening on port 4000'))