import ApiErrors from "../errors/APIErrors.js";
import ERROR_MESSAGE from "../errors/errorMessage.js";
import ManagerUsuarios from "../service/usuario.service.js";

class UsuarioController {
  constructor() {}

  async create(req, res, next) {
    try {
      const data = req.body;
      console.log(data);
      const usuario = await ManagerUsuarios.create(data);
      res.status(201).json({ usuario: usuario.id });
    } catch (error) {
      next(e);
    }
  }
  async getAll(req, res, next) {
    try {
      const usuarios = await ManagerUsuarios.getAll();
      console.log(usuarios);
      res.status(200).json(usuarios);
    } catch (e) {
      next(e);
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const usuario = await ManagerUsuarios.getOne(id);
      if (!usuario) {
        throw new ApiErrors(ERROR_MESSAGE.ID_NO_ENCONTRADA);
      }
      res.status(200).json({ Usuario: usuario.email });
    } catch (e) {
      next(e);
    }
  }
}

export default new UsuarioController();
