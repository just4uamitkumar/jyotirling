import mongoose from "mongoose";

const templeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        imgPath: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
    },{
        timestamp: true,
    })

const Temple = mongoose.models.temple || mongoose.model('temple', templeSchema)

export default Temple;