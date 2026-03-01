import Mascota from "../models/mascotas.model.js";
import ApiErrors from "../errors/APIErrors.js";
import ERROR_MESSAGE from "../errors/errorMessage.js";
class ManagerMascotas {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log(data);
    const mascota = await this.model.create(data);
    return mascota.id;
  }
  async getAll() {
    const mascotas = await this.model.find();
    if (mascotas.length === 0) {
      throw new ApiErrors(ERROR_MESSAGE.NO_HAY_DATOS, 404);
    }
    return mascotas;
  }

  async getOne(id) {
    const mascota = await this.model.findById(id);
    if (!mascota) {
      throw new ApiErrors(ERROR_MESSAGE.MASCOTA_NO_ENCONTRADA, 404);
    }
    return mascota;
  }

  async deleted(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

export default new ManagerMascotas(Mascota);
