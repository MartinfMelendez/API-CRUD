import Mascota from "../models/mascotas.model.js";
class ManagerMascotas {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const mascota = await this.model.create(data);
      return mascota;
    } catch (error) {}
  }
  async getAll() {
    try {
      const mascotas = await this.model.find();
      return mascotas;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ManagerMascotas(Mascota);
