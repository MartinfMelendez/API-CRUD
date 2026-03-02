import Usuario from "../models/usuarios.model.js";
import ApiErrors from "../errors/APIErrors.js";
import ERROR_MESSAGE from "../errors/errorMessage.js";

class ManagerUsuarios {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const usuario = await this.model.create(data);
    return usuario;
  }

  async getAll() {
    const usuarios = await this.model.find().select("nombre email");
    if (usuarios.length === 0) {
      throw new ApiErrors(ERROR_MESSAGE.NO_HAY_DATOS, 404);
    }
    return usuarios;
  }

  async getOne(id) {
    const usuario = await this.model.findById(id);
    if (!usuario) {
      throw new ApiErrors(ERROR_MESSAGE.ID_NO_ENCONTRADA);
    }
    return usuario;
  }
}

export default new ManagerUsuarios(Usuario);
