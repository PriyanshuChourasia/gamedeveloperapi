import { getAllGenre } from "../controllers/GenreController.js";



export function genreApiRoute(router){
    router.get("/genre",getAllGenre);
}