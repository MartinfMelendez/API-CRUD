import { Router } from "express";

const usuariosRouter = Router();

usuariosRouter.get("/", "get");
usuariosRouter.get("/:id", "getOne");
usuariosRouter.get("/", "post");
usuariosRouter.get("/:id", "update");
usuariosRouter.get("/:id", "delete");

export default usuariosRouter;
