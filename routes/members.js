import express from "express";
import {
  createMember,
  updateMember,
  deleteMember,
  getMember,
  getMembers,
} from "../controllers/members.js";

const router = express.Router();

// GET MEMBER
router.get("/:id", getMember);

// GET MEMBERS
router.get("/", getMembers);

// DELETE MEMBER
router.delete("/deletemember/:id", deleteMember);

// UPDATE MEMBER
router.put("/update_member/:id", updateMember);

// CREATE MEMBER
router.post("/create_memeber", createMember);

export default router;
