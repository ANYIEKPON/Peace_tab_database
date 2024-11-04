import express from "express";
import { createAttendance, getAttendance } from "../controllers/attendance.js";

const router = express.Router();

// GET THOSE PRESENT;
router.get("/getbydate", getAttendance);

// CREATE THOSE PRESENT

router.post("/createabsent", createAttendance);

export default router;
