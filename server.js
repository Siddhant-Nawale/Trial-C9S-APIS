const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000




const BarChartData = require('./BarChartData')
const LineChatData = require('./LineChartData')
const PieChartData = require('./PieChartData')


app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 


app.get('/',(req,res)=>{
    res.send("Hii there,<br>This an api made for practice")
})


app.get('/BasicBarChartData',(req,res)=>{
    res.json(BarChartData.BasicBarChartData)
})


app.get('/StackedHorizontalBarChartData',(req,res)=>{
    res.json(BarChartData.StackedHorizontalBarChartData)
})


app.get('/WaterfallBarChartData',(req,res)=>{
    res.json(BarChartData.WaterfallBarChartData)
})

app.get('/NegativeValueBarChartData',(req,res)=>{
    res.json(BarChartData.NegativeValueBarChartData)
})


app.get('/BasicBarChartData',(req,res)=>{
    res.json(LineChatData.BasicLineData)
})


app.get('/StackedHorizontalBarChartData',(req,res)=>{
    res.json(LineChatData.StackedAreaData)
})


app.get('/WaterfallBarChartData',(req,res)=>{
    res.json(LineChatData.StackedLineData)
})



app.get('/BasicPieChartData',(req,res)=>{
    res.json(PieChartData.BasicPieChartData)
})


app.get('/DoughnutPieChartData',(req,res)=>{
    res.json(PieChartData.DoughnutPieChartData)
})


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})