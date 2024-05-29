// import { number, string } from "joi";
import mongoose from "mongoose";

const project = new mongoose.Schema({
    title: {
        type: String,
        unique: true // `email` must be unique
    },
    description: String,
    task: [
        {
            id: { type: Number, default: 0 },
            title: { type: String, default: "" },
            description: { type: String, default: "" },
            order: { type: Number, default: 0 },
            stage: { type: String, default: "" },
            index: { type: Number, default: 0 },
            attachment: [
                { type: { type: String, default: "" }, url: { type: String, default: "" } }
            ],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
   
}, { timestamps: true })


export default mongoose.model('Project', project);