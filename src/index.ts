import "dotenv/config";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import connectDB from "./db";
import cors from 'cors';
import { registerSockets } from './openai/openai';

const app = express();
app.use(cors());

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

registerSockets(io);
connectDB();


server.listen(process.env.PORT, () => {
  console.log("server running at http://localhost:3000");
});
