
export async function userApiRoutes(route){
    route.get("/user",(req,res)=>{
        return res.status(200).json({
            "message":"This is user route"
        });
    });


    route.post("/user",(req,res)=>{


        const {name,email,password} = req.body;

        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                data: {
                    message:"Request Failed"
                },
                success:false
            });
        }

        const userObj = {
            name:name,
            email:email,
            password:password
        };



        return res.status(200).json({
            data: userObj,
            success:true
        });
    });
}