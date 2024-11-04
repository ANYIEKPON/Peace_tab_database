import mongoose from "mongoose";
const MembersSchema = new mongoose.Schema(
  {
    full_names: {
      type: String,
      required: true,
      unique: true,
    },
    serial_no: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    phone_no: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    bus_stop: {
      type: String,
    },
    birth_day: {
      type: String,
      required: true,
    },
    worker: {
      type: String,
    },
    nextof_kin: {
      type: String,
    },
    marital_status: {
      type: String,
    },
    spouse_name: {
      type: String,
    },
    number_children: {
      type: String,
    },
    profession: {
      type: String,
      required: true,
    },
    new_member: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", MembersSchema);