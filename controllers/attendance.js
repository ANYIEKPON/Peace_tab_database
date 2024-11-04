import AbsentArray from "../models/Attendance.js";

export const createAttendance = async (req, res) => {
  const present = new AbsentArray(req.body);
  try {
    const savedPresent = await present.save();
    res.status(200).json(savedPresent);
  } catch (error) {
    console.log(error);
  }
};

export const getAttendance = async (req, res) => {
  const { date } = req.query;
  try {
    const response = await AbsentArray.find({
      date: date,
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
