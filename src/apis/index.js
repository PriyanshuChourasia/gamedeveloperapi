import { genreApiRoute } from "./genreRoute.js";
import { projectApiRoutes } from "./projectRoute.js";
import { userApiRoutes } from "./userRoute.js";


async function expressapiroutes(router){
    genreApiRoute(router);
    projectApiRoutes(router);
}



export default expressapiroutes;