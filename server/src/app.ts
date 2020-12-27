import express from "express";
// Configuration file
import { PORT } from "./config/env.json";

// Middleswares
import cors from "cors";

// Routes
import request from "./routes/request";

const app = express();

// Middleswares
app.use(cors());
app.use(express.json());

// Routes
app.use("/request", request);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
