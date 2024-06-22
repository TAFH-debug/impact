import "dotenv/config";
import express from "express";
import connectDB from "./db";
import cors from 'cors';
import {registerChat} from './openai/openai';
import authRouter from "./auth/auth-router";
import coursesRouter from "./courses/course-router";
import adminRouter from "./admin/admin-router";
import userRouter from "./auth/user-router";

const app = express();
app.use(cors());
app.use(express.json());

app.use(adminRouter);
app.use(userRouter);
app.use("/", authRouter);
app.use("/courses", coursesRouter);

registerChat(app);
connectDB();


app.listen(process.env.PORT, () => {
  console.log("server running at http://localhost:3000");
});
