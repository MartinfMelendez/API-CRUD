import Mascota from "../models/mascotas.model.js";
import ApiErrors from "../errors/APIErrors.js";
import ERROR_MESSAGE from "../errors/errorMessage.js";

class ManagerMascotas {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    if (!data?.nombre) {
      throw new ApiErrors(ERROR_MESSAGE.FALTA_NOMBRE);
    }
    if (!data?.tipo) {
      throw new ApiErrors(ERROR_MESSAGE.FALTA_TIPO);
    }
    if (!data?.raza) {
      throw new ApiErrors(ERROR_MESSAGE.FALTA_RAZA);
    }
    if (isNaN(data.edad) || data.edad < 0) {
      throw new ApiErrors(ERROR_MESSAGE.ERROR_EDAD);
    }
    if (!data?.adoptado) {
      throw new ApiErrors(ERROR_MESSAGE.ERROR_ADOPCION);
    }
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
      throw new ApiErrors(ERROR_MESSAGE.ID_NO_ENCONTRADA, 404);
    }
    return mascota;
  }

  async update(id, data) {
    const mascota = await this.getOne(id);
    if (!mascota) throw new ApiErrors(ERROR_MESSAGE.ID_NO_ENCONTRADA, 404);
    const mascotaActualizada = await this.model.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });
    return mascotaActualizada;
  }

  async deleted(id) {
    const exist = await this.getOne(id);

    if (!exist) {
      throw new ApiErrors(ERROR_MESSAGE.ID_NO_ENCONTRADA, 404);
    }

    return await this.model.findByIdAndDelete(id);
  }
}

export default new ManagerMascotas(Mascota);
