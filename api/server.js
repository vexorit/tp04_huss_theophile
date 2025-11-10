import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import pollutionRoutes from "./routes/pollutionRoutes.js";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use(userRoutes);
app.use(pollutionRoutes);

app.get("/", (req, res) => {
  res.send("🌍 API Pollution & Users (MariaDB) est en ligne !");
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en écoute sur http://localhost:${PORT}`);
});
