import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required:true
    },
    userType: {
        type: String,
        enum:['author','viewer']
    }
}, {
    timestamps: true,
})
 

const User = mongoose.model('User', userSchema);
export {User}