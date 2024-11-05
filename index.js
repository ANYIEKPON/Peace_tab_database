import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import memberRoutes from "./routes/members.js";
import authRoute from "./routes/auth.js";
import presentRoutes from "./routes/present.js";
import absentRoutes from "./routes/absent.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("online Connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.use("/api/auth", authRoute);
app.use("/api/member", memberRoutes);
app.use("/api/presentMem", presentRoutes);
app.use("/api/absent", absentRoutes);

app.listen(7000, () => {
  connect();
  console.log("connected to backend");
});
