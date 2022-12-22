import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    distance: {
        type: String,
        require: true
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
        require: true
    },
    cheapestPrice: {
        type: Number,
        require: true
    },
    features: {
        type: Number,
        require: true
    }
})

export default mongoose.model("Hotels", HotelSchema)