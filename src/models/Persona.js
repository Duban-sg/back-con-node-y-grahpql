import { Schema, model } from "mongoose";

const Persona = new Schema({
    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    identification:String,
    age:Number

},{
    timestamps:true
});

export default model('Persona', Persona)

