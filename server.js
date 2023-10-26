const express = require('express')
const app = express()
var AccessControl = require('express-ip-access-control');

const PORT = process.env.PORT || 5000



const BarChartData = require('./BarChartData');
const { options } = require('./IPControl');
const LineChatData = require('./LineChartData')
const PieChartData = require('./PieChartData')

// app._router.stack.forEach(function (r) {
//     if (r.route && r.route.path) {
//       console.log(r.route.path)
//     }
//   });

app.use(AccessControl(options));


app.use((req, res, next) => {
    res.header({"Access-Control-Allow-Origin": "*"});
    next();
  }) 


app.get('/',(req,res)=>{
    res.send(`Hii there,<br>This an api made for practice
    <br/>
    Available APIS :<br/>
    <a href="https://trial-express-render-deployment.onrender.com/BasicBarChartData">https://trial-express-render-deployment.onrender.com/BasicBarChartData</a>
    <br/>
    <a href = "https://trial-express-render-deployment.onrender.com/StackedHorizontalBarChartData">https://trial-express-render-deployment.onrender.com/StackedHorizontalBarChartData</a>
    <br/>
    <a href = "https://trial-express-render-deployment.onrender.com/WaterfallBarChartData">https://trial-express-render-deployment.onrender.com/WaterfallBarChartData</a>
    <br/>
    <a href="https://trial-express-render-deployment.onrender.com/NegativeValueBarChartData">https://trial-express-render-deployment.onrender.com/NegativeValueBarChartData</a>
    <br/>
    <a href="https://trial-express-render-deployment.onrender.com/BasicLineChartData">https://trial-express-render-deployment.onrender.com/BasicLineChartData</a>
    <br/>
    <a href="https://trial-express-render-deployment.onrender.com/StackedHorizontalBarChartData">https://trial-express-render-deployment.onrender.com/StackedHorizontalBarChartData</a>
    <br/>
    <a href = "https://trial-express-render-deployment.onrender.com/WaterfallBarChartData">https://trial-express-render-deployment.onrender.com/WaterfallBarChartData</a>
    <br/>
    <a href = "https://trial-express-render-deployment.onrender.com/BasicPieChartData">https://trial-express-render-deployment.onrender.com/BasicPieChartData</a>
    <br/>
    <a href = "https://trial-express-render-deployment.onrender.com/DoughnutPieChartData">https://trial-express-render-deployment.onrender.com/DoughnutPieChartData</a>
    `)
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


app.get('/BasicLineChartData',(req,res)=>{
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