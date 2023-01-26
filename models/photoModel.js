import mongoose from "mongoose";

const {Schema} = mongoose;

const photoSchema = new Schema({
    name:{
        type:String,
        require:true,   
    },
    description:{
        type: String,
        require:true,
        trim:true
    },
    uploadedAt:{
        type:Date,
        default: Date.now
    },
});

const Photo = mongoose.model("Photo",photoSchema);

export default Photo;