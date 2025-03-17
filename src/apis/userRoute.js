

export async function userApiRoutes(route){
    route.get("/user",(req,res)=>{
        return res.status(200).json({
            "message":"This is user route"
        });
    })
}