import cookieParser from "cookie-parser";
import express from "express";
// import pino from "pino";
import logger from "pino-http";
// import {randomUUID} from "node:crypto";
import helmet from "helmet";


function appMiddleware(app){
    console.log("Middleware configured");
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.disable("x-powered-by");
    app.use(helmet({
        contentSecurityPolicy:{
            useDefaults:true,
            directives:{
                "script-src": ["'self'","example.com"],
                "style-src": null
            }
        },
        xPoweredBy:false
    }));
    app.use(logger({
        quietReqLogger: false,
        quietResLogger: false,
        transport:{
            target:"pino-pretty",
            options:{
                destination: 1,
                all: false,
                translateTime: true
            }
        },
        serializers:{
            req(req){
                req.body = req.raw.body;
                return req;
            },
        } 
    }));

    // app.use(logger({
    //     logger: pino(),
    //     transport:"pino-pretty",

    //     genReqId: function (req,res){
    //         const existingID = req.id ?? req.headers["x-request-id"]
    //         if(existingID) return existingID;
    //         const id = randomUUID();
    //         res.setHeader('X-Request-Id', id);
    //         return id;
    //     },

    //     serializers:{
    //         err: pino.stdSerializers.err,
    //         req: pino.stdSerializers.req,
    //         res: pino.stdSerializers.res,
    //     },

    //     wrapSerializers: false,


    //     customLogLevel: function(req, res, err){
    //         if(res.statusCode >= 400 && res.statusCode < 500){
    //             return 'warn';
    //         }else if(res.statusCode >= 500 || err){
    //             return 'error';
    //         }else if(res.statusCode >= 300 && res.statusCode < 400){
    //             return 'silent';
    //         }
    //         return 'info';
    //     },

    //     customAttributeKeys:{
    //         req: 'request',
    //         res: 'response',
    //         err: 'error',
    //         responseTime: 'timeTaken'
    //     }

    // }))


}


export default appMiddleware;