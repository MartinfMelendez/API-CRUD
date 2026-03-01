import mascotaManager from "../service/mascota.manager.js";

class MascotasController {
  constructor() {}

  async create(req, res) {
    try {
      const data = req.body;
      if (data.nombre === "" || data.nombre === undefined)
        throw new Error("El nombre no puede estar vacio");
      if (data.nombre === "" || data.nombre === undefined)
        throw new Error("El nombre no puede estar vacio");
      await mascotaManager.create(data);
      res.status(201).json({ objeto: data });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getAll(req, res, next) {
    try {
      const mascotas = await mascotaManager.getAll();
      res.status(200).json(mascotas);
    } catch (e) {
      next(e);
    }
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const mascota = await mascotaManager.getOne(id);
      res.status(200).json({
        nombre: mascota.nombre,
        tipo: mascota.tipo,
        raza: mascota.raza,
      });
    } catch (e) {
      next(e);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ stauts: "update-ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const mascota = await mascotaManager.deleted(id);
      res.status(201).json({ stauts: "delete-ok", mascotaId: mascota.id });
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new MascotasController();
