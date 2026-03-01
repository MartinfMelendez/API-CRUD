import "dotenv/config";

import express from "express";
import router from "./src/routers/index.router.js";
import dbConnection from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandlers.js";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server ready on PORT ${PORT}`);
  dbConnection();
});
