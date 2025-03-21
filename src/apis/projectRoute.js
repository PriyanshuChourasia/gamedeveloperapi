import { createProject, getAllProject, showProject } from "../controllers/ProjectController.js";






export async function projectApiRoutes(router){

    router.get('/projects',getAllProject);

    router.post('/project',createProject);

    router.get('/project',showProject);
}