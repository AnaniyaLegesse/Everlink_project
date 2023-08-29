import mongoose from "mongoose"

const castSchema = mongoose.Schema(
    {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        star: {
            type: Number,
            required: true,
            default: 1
        },
        reviews: {
            type: Number,
            required: true,
            default: 1
        },
        proffesion: {
            type: String,
            required: true,
            default: 'Acting '
        },
        education:{
            type: String,
            required: true
        },
        expirance:{
            type: Number,
            required: true,
            default: 0
        },
        category:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Cast=mongoose.model("Cast",castSchema); 

export default Cast;