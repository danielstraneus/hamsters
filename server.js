// Importera npm-paket och moduler
// Allmänna inställningar
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 1178;
import hamsters from "./routes/hamsters.js";
const staticFolder = path.join(__dirname, "public");

// Middleware
// CORS öppnar vårt projekt så det kan användas från andra domäner
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger - skriv ut information om inkommande request
app.use((req, res, next) => {
  console.log(`Logger: ${req.method}  ${req.url} `, req.body);
  next();
});

// Serve static files in this folder
app.use(express.static(staticFolder));

// Routes
app.use("/hamsters", hamsters);

// Starta server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
