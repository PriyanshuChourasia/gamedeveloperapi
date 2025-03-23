import express from "express";
import startSever from "./server/index.js";
import expressapiroutes from "./apis/index.js";
import appMiddleware from "./middlewares/index.js";
import connectDB from "./config/db.js";

const app = express();
const router = express.Router();

app.get("/",(req,res)=>{
    return res.status(200).json({
        "message":"Welcome to Wish Alpha",
        "website":"https://wishalpha.com"
    });
});

//  initializing router
app.use("/api",router);

appMiddleware(app);
// app routes are handled from this file
// expressapiroutes(app);
expressapiroutes(router);
startSever(app);
connectDB();
