import express from "express";
import { createAttendance, getAttendance } from "../controllers/present.js";

const router = express.Router();

// GET THOSE PRESENT;
router.get("/getbydate", getAttendance);

// CREATE THOSE PRESENT

router.post("/createpresent", createAttendance);

export default router;
