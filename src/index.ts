import "dotenv/config";
import express from "express";
import connectDB from "./db";
import cors from 'cors';
import {registerChat} from './openai/openai';

const app = express();
app.use(cors());

registerChat(app);
connectDB();


app.listen(process.env.PORT, () => {
  console.log("server running at http://localhost:3000");
});
