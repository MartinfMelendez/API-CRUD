import express from "express";
import router from "./src/routers/index.router.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use("/api", router);

app.listen(PORT, () => console.log(`Server ready on PORT ${PORT}`));
