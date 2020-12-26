import express from "express";
// Configuration file
import { PORT } from "./config/env.json";

// Middleswares
import cors from "cors";

// Routes
import request from "./routes/request";

const app = express();

// Middleswares
app.use(express.json());

app.use("/request", cors(), request);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
