import express from "express";
import https from "https";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import pollutionRoutes from "./routes/pollutionRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const privateKey = fs.readFileSync(process.env.SSL_PRIVKEY, "utf8");
const certificate = fs.readFileSync(process.env.SSL_FULLCHAIN, "utf8");

const credentials = { key: privateKey, cert: certificate };

app.use(cors());
app.use(bodyParser.json());

app.use(userRoutes);
app.use(pollutionRoutes);

app.get("/", (req, res) => {
  res.send("🌍 API Pollution & Users (MariaDB) est en ligne !");
});

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, () => {
  console.log(
    `✅ Serveur HTTPS en écoute sur https://klebert-host.com:${PORT}`
  );
});
