import { Router } from "express";
import routerMascotas from "./mascotas.router.js";
import usuariosRouter from "./usuarios.router.js";

const router = Router();

router.use("/mascotas", routerMascotas);
router.use("/usuarios", usuariosRouter);

export default router;
