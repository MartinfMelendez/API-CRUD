import "dotenv/config";

import express, { urlencoded } from "express";
import router from "./src/routers/index.router.js";
import dbConnection from "./src/config/db.js";
const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server ready on PORT ${PORT}`);
  dbConnection();
});
