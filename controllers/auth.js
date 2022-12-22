import User from "../models/User.js"
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });

        await newUser.save()
        res.status(200).send("user has been register")
    } catch {
        next(err)
    }
}

// USER Login
export const login = async (req, res, next) => {
    try {
        const email = await User.findOne({ email: req.body.email })
        if (!email) return next(createError(404, "User not found"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password, email.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong Password or Username"))
        const token = jwt.sign({ id: email._id, isAdmin: email.isAdmin }, process.env.JWT)
        const { password, isAdmin, ...otherDetails } = email._doc;
        res.cookie("access_token",token,{
            httpOnly:true, //for secure
        }).status(200).json({ ...otherDetails })
    } catch {
        next(err)
    }
}