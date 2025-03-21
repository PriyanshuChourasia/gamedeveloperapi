import {MongoClient, MongoServerError} from "mongodb";
import mongoose  from "mongoose";

// Connection URL
const URL = "mongodb://mongo_db:27017/wishdeveloperdb";
const client = new MongoClient(URL);

// Database name
const dbName = "wishdeveloperdb";


async function main(params) {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // const collection = db.collection('project');
    return "done.";
}


// async function connectDB(){
//     // main.then((data) => {
//     //     console.log("Connection Done");
//     //     console.log("Connection Done: ",data);
//     // }).catch((err) => {
//     //     if(err instanceof MongoServerError){
//     //         console.log(`Logging Error: ${err}`);
//     //     }
//     //     throw err;
//     // });
//     await client.connect();
//     console.log("Connected successfully to server");
//     await client.db("admin").command({ping:1});
//     console.log("Pinged your deployment");
// }
async function connectDB(){
    mongoose.connect(URL).then((data)=>{
        console.log("Connection Done");
        console.log(`Connection State: ${data.connection.readyState}`);
    }).catch((error)=>{
        if(error instanceof mongoose.Error){
            console.log(`Mongoose Error: ${error.name}`);
            console.log(`Mongoose Error Message: ${error.message}`);
            console.log(`Mongoose Error Cause: ${error.cause}`);
        }
        console.log("Connection Closed successfully");
        mongoose.connection.close();
    });
}



export default connectDB;