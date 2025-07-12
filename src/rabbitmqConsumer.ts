import amqp from "amqplib";
import dotenv from "dotenv";
import { socketIO } from "./index";

dotenv.config();

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost";

const startConsumer = async () => {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();
    const queue = "checkin-events";

    await channel.assertQueue(queue, { durable: true });

    console.log(`✅ Listening on queue: ${queue}`);

    channel.consume(queue, (message) => {
      if (message) {
        const payload = JSON.parse(message.content.toString());
        console.log("📨 Received check-in event:", payload);

        socketIO.emit("checkin-notification", payload);

        channel.ack(message);
      }
    });
  } catch (error) {
    console.error("❌ Error connecting to RabbitMQ:", error);
  }
};

export default startConsumer;
