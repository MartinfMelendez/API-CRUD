import { Router } from "express";
import routerMascotas from "./mascotas.router.js";

const router = Router();

router.use("/mascotas", routerMascotas);

export default router;
