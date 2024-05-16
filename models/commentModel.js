import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
         ref:'User',
    },
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
         ref:'Blog',
    },
    text: {
        type: String,
        required: true,
        trim: true,
        default:'nice work'
    }
}, {
    timestamps:true,
})

const Comment = mongoose.model('Comment', commentSchema);
export {Comment}