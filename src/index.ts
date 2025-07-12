import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import startConsumer from "./rabbitmqConsumer";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("📨 HRD connected", socket.id);
  socket.on("disconnect", () => {
    console.log("📨 HRD disconnected", socket.id);
  });
});

export const socketIO = io;

const PORT = process.env.PORT || 3003;

httpServer.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
startConsumer();
