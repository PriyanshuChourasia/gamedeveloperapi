

const port  = process.env.PORT || 8008; 



function startSever(app){
    app.listen(port,()=>{
        console.log(`Application is running at ${port}`);
    });
}



export default startSever;