import mongoose from "mongoose";
const AbsentSchema = new mongoose.Schema(
  {
    date: {
      type: String,
    },
    absent: [
      {
        full_names: {
          type: String,
          required: true,
        },
        serial_no: {
          type: String,
          required: true,
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
        birth_day: {
          type: String,
        },
        nextof_kin: {
          type: String,
        },
        spouse_name: {
          type: String,
        },
        profession: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("AbsentArray", AbsentSchema);
