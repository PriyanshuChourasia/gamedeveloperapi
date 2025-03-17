import express from "express";
import startSever from "./server/index.js";
import expressapiroutes from "./apis/index.js";

const app = express();
const router = express.Router();


expressapiroutes(app);
startSever(app);
