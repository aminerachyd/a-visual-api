import express from "express";
// Configuration file
import { PORT } from "./config/env.json";

// Routes
import request from "./routes/request";

const app = express();

// Middleswares
app.use(express.json());

app.use("/request", request);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
