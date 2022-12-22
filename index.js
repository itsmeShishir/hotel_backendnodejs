import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";


const app = express()
// Connect to mongo db
dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB http://localhost:8800.")
    } catch (error) {
        throw error
    }
}

app.get("/", (req, res) => {
    res.send("hello first request")
})
mongoose.connection.on("disconnected", () => {
    console.log("mongodb is Disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("mongodb is connected")
})

// Midelewares
app.use(cookieParser())
// express cannot use json data 
// we need to use down description applications
app.use(express.json())


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


// first methord of error handeling
// app.use((req, res, next) => {
//     res.send("hi iam a middleware")
//     next()
// })

// second methord

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(8800, () => {
    connect()
    console.log("connected with applications!")
})