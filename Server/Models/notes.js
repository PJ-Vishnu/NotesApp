import mongoose, { Types } from "mongoose";
const notes= new mongoose.Schema({
    Title:{
        type:String
    },
    Content:{
        type:String
    },
    Instruction:{
        type:String
    },
})
const Notes=mongoose.model('Notes', notes);
export {Notes};