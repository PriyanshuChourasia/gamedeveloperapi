import express from "express";
import startSever from "./server/index.js";
import expressapiroutes from "./apis/index.js";
import appMiddleware from "./middlewares/index.js";

const app = express();

app.get("/developer",(req,res)=>{
    return res.status(200).json({
        "message":"Welcome to Wish Alpha",
        "website":"https://wishalpha.com"
    })
});

appMiddleware(app);
expressapiroutes(app);
startSever(app);
