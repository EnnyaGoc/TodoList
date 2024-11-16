import mongoose from "mongoose";


const celularSchema = new mongoose.Schema({
        marca:{
            type: String,
            required: true
        },
        modelo:{
            type: String,
            required: true
        },
        memoria:{
            type: Number,
            required: true
        },
        lancamento:{
            type: Date,
            required: true
        }

})

export default mongoose.model("Celular", celularSchema);