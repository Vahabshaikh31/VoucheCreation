import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DatabaseConnect } from "./database/index.js"; // Import the DatabaseConnect function
import userRouter from "./routers/route.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const startServer = async () => {
  const dbConnected = await DatabaseConnect();
  if (dbConnected) {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } else {
    console.log("Failed to connect to the database. Server will not start.");
  }
};

// Start the application
startServer();
