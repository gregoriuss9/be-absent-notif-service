# 📣 Notification Service

This is the **notification microservice** in the Employee Attendance System.

- 🐰 Consumes attendance events from RabbitMQ
- 🧑‍💼 Emits real-time updates to HRD via Socket.IO
- 🔔 Future support for email/SMS notifications

---

## 🛠 Installation

```bash
npm install
```

To start the development server:

```bash
npm run dev
```

---

## ⚙️ Environment Variables (.env) Example

```
PORT=3003
RABBITMQ_URL=amqp://localhost:5672


```

---

## 📦 Folder Structure

```
notif-service/
├── src/
│   ├── index.ts            # Express + HTTP + Socket.IO setup
│   ├── rabbitmqConsumer.ts # Consumes messages and emits to Socket.IO
│   └── types/              # Optional type definitions
├── .env
├── tsconfig.json
└── package.json

```

---

## 🔗 Dependencies

- Express

- Socket.io

- RabbitMQ (via amqplib)
