import { userApiRoutes } from "./userRoute.js";


async function expressapiroutes(router){
    userApiRoutes(router);
}



export default expressapiroutes;