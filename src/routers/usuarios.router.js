import { Router } from "express";
import usuarioController from "../controllers/usuario.controller.js";

const usuariosRouter = Router();

usuariosRouter.get("/", usuarioController.getAll);
usuariosRouter.get("/:id", usuarioController.getOne);
usuariosRouter.post("/", usuarioController.create);
// usuariosRouter.put("/:id", "update");
// usuariosRouter.delete("/:id", "delete");

export default usuariosRouter;
