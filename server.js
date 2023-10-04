const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000


const data = require('./Data')

app.get('/',(req,res)=>{
    res.send("Hii there,<br>This an api made for practice")
})

app.get('/BasicChartData',(req,res)=>{
    res.json(data.BasicChart)
})

app.get('/BasicLineData',(req,res)=>{
    res.json(data.Basicline)
})

app.get('/BasicPieData',(req,res)=>{
    res.json(data.BasicPie)
})


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})