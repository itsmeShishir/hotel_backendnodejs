import express from "express";
import { updateUser, deleteUser, getallUsers, getUser } from "../controllers/user.js";

const router = express.Router();

// Update
router.put("/:id", updateUser)
// delete
router.delete("/:id", deleteUser)
// get
router.get("/:id", getUser)
// getAll
router.get("/", getallUsers)

export default router