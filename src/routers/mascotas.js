import { Router } from "express";
import MascotasController from "../controllers/mascotas.js";

const routerMascotas = Router();

routerMascotas.post("/", MascotasController.create);
routerMascotas.get("/", MascotasController.getAll);
routerMascotas.get("/:id", MascotasController.getOne);
routerMascotas.put("/:id", MascotasController.update);
routerMascotas.delete("/:id", MascotasController.delete);

export default routerMascotas;
