import mongoose,{Schema} from "mongoose";

const genreSchema = new Schema({
    name:{
        type: String,
        unique: true
    }
});


//  Mongoose model created
export const Genre = mongoose.model(genreSchema);