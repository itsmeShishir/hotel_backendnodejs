import express from "express";
import { createHotel, deleteHotel, getallHotels, getHotel, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

// Create
router.post("/", createHotel);
// Update
router.put("/:id", updateHotel)
// delete
router.delete("/:id", deleteHotel)
// get
router.get("/:id", getHotel)
// getAll
router.get("/", getallHotels)

export default router