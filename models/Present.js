import mongoose from "mongoose";
const PresentSchema = new mongoose.Schema(
  {
    date: {
      type: String,
    },
    present: [
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
          required: true,
        },
        nextof_kin: {
          type: String,
        },
        spouse_name: {
          type: String,
        },
        profession: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("PresentArray", PresentSchema);
