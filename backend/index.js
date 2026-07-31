require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require("./model/OrdersModel");
const { Signup , Login} = require("./AuthController");
const { userVerification } = require("./middleware/AuthMiddleware");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());


// app.get("/addPositions",(req,res)=>{
//     const positionsData = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     positionsData.forEach((ele)=>{
//         let newPosition = new PositionsModel({
//             product: ele.product,
//             name: ele.name,
//             qty: ele.qty,
//             avg: ele.avg,
//             price: ele.price,
//             net: ele.net,
//             day: ele.day,
//             isLoss: ele.isLoss,
//         })
//         newPosition.save();
//     })
//     res.send("data was saved");

// })

app.get("/allHoldings", async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get("/allPositions", async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder",async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("order saved!");
})

app.get("/allOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});

app.post("/signup", Signup);
app.post('/login', Login);
app.get("/verify", userVerification);

app.listen(PORT, () => {
  console.log("server is litening on port 8080");
  mongoose.connect(uri);
  console.log("Mogodb was connected");
});
