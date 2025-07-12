import express from "express";
import { router } from "./routes/index.js"; // Placeholder for routes

export const app = express();

app.use(express.json());

// Static folder (if needed)
app.use("/public", express.static("public"));

app.use("/api", router); // Mount your routes here
