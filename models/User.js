import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Number,
        require: true
    }
}, { timestamps: true })

export default mongoose.model("User", UserSchema)