import {v7 as uuidv7} from "uuid";
import { Project } from "../models/Project.js";
import { validate as uuidValidate } from "uuid";



export async function getAllProject(req,res,next){

    const projects = await Project.find();

    return res.status(200).json({
        data:projects,
        message: "Records fetched successfully",
        status: 200
    });
}




export async function createProject(req,res,next){
    const projectUUID = uuidv7();

    if(projectUUID !== null){
        const projectObject = {
            projectID: projectUUID,
            projectName: projectUUID
        };

        if(!uuidValidate(projectObject.projectID))
        {
            return res.status(400).json({
                error:{
                    message:"UUID is not valid",
                    success:false,
                    status: 400
                },
            });
        }else{
            const project = await Project.create(projectObject);
            return res.status(201).json({
                data:{
                    projectId:  project.projectID,
                    gameName: project.projectID,
                    genre: project.genre,
                    thumbnail: project.thumbnail,
                    description: project.description
                },
                success:true,
                message: "Project created successfully"
            });
        }
    }else{
        return res.status(400).json({
            error:{
                message:"UUID not created",
                success:false,
                status: 400
            },
        });
    }

}



export async function showProject(req,res,next){

    const projectId = req.query.projectId;

    if(projectId == undefined){
        return res.status(404).json({
            message: "Please provide parameters",
            success:false,
            status: 404
        });
    }

    if(projectId !== null){

        const userExists = await Project.exists({projectID: projectId});

        if(userExists){
            const project = await Project.findOne({projectID: projectId}).exec();
            return res.status(200).json({
                message: "Record fetched successfully",
                data: project,
                status: 200
            });
        }else{
            return res.status(200).json({
                message: "Record not found",
                success: false,
                status: 404
            });
        }
    }
    else{
        return res.status(404).json({
            message: "Please provide parameters",
            success:false,
            status: 404
        });
    }

}


export async function updateProject(req,res,next){

}