import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import connectDB from "./db";
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

connectDB();


server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
