import { Router } from "express";
import routerMascotas from "./mascotas.js";

const router = Router();

router.use("/", routerMascotas);

export default router;
