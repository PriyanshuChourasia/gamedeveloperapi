import mongoose from "mongoose";

const {Schema} = mongoose;

const projectSchema = new Schema({
    projectID:{
        type: String,
        required: true,
    },
    projectName:{
        type: String,
    },
    genre:{
        type: String,
        enum:['Action','Puzzle']
    },
    thumbnail:{
        type: String
    },
    description:{
        type: String
    },
    projectFilePath:{
        type: String
    }
});

export const Project = mongoose.model("Projects",projectSchema);