import express from "express";
import {createbooking, deleteBooking, getbooking} from "../controllers/bookingController.js"

const router = express.Router();

router.post("/", createbooking);
router.get("/", getbooking);
router.delete("/:id", deleteBooking);

export default router;