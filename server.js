import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 1337;
import hamsters from "./routes/hamsters.js";
const staticFolder = path.join(__dirname, "public");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
  console.log(`Logger: ${req.method}  ${req.url} `, req.body);
  next();
});

// Static
app.use(express.static(staticFolder));

// Routes
app.use("/hamsters", hamsters);

// Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
