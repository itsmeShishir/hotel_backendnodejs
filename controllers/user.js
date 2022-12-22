import User from "../models/User.js"

// Update
export const updateUser = async (req, res, next) => {
    try {
        const UpdatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(UpdatedUser)
    } catch (err) {
        next(err)
    }
}
// Delete
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(
            res.status(200).json("User has been deleted")
        )
    } catch (err) {
        next(err)
    }
}
// GET
export const getUser = async (req, res, next) => {
    try {
        const User = await User.findById(req.params.id);
        res.status(200).json(User)
    } catch (err) {
        next(err)
    }
}

// GET ALL
export const getallUsers = async (req, res, next) => {
    try {
        const Users = await User.find(req.params.id)
        res.status(200).json(Users)
    } catch (err) {
        next(err)
    }
}
