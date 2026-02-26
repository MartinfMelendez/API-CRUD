import { Router } from "express";
import routerMascotas from "./mascotas.js";

const router = Router();

router.use("/mascotas", routerMascotas);

export default router;
