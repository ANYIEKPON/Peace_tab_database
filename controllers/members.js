import Member from "../models/Members.js";
// import { createError } from "../utils/error.js";

export const createMember = async (req, res) => {
  const newMember = new Member(req.body);
  try {
    const saveMembers = await newMember.save();
    res.status(200).json(saveMembers);
  } catch (error) {
    console.log(error);
  }
};

export const updateMember = async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedMember);
  } catch (error) {
    console.log(error);
  }
};

export const deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Member deleted" });
  } catch (error) {
    console.log(error);
  }
};

export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    console.log(error);
  }
};

export const getMember = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const member = await Member.findById(_id);
    res.status(200).json(member);
  } catch (error) {
    console.log(error);
  }
};
