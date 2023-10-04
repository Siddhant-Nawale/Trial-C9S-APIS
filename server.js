const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000


const data = require('./Data')

app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 


app.get('/',(req,res)=>{
    res.send("Hii there,<br>This an api made for practice")
})

app.get('/BasicBarChartData',(req,res)=>{
    res.json(data.BasicChart)
})

app.get('/BasicLineChartData',(req,res)=>{
    res.json(data.Basicline)
})

app.get('/BasicPieChartData',(req,res)=>{
    res.json(data.BasicPie)
})


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})