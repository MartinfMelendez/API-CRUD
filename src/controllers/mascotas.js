import ApiErrors from "../errors/APIErrors.js";
import ERROR_MESSAGE from "../errors/errorMessage.js";
import mascotaManager from "../service/mascota.manager.js";

class MascotasController {
  constructor() {}

  async create(req, res, next) {
    try {
      const { nombre, tipo, raza, edad } = req.body;

      const data = await mascotaManager.create({
        nombre: nombre.toUpperCase(),
        tipo: tipo.toUpperCase(),
        raza: raza.toUpperCase(),
        edad: edad,
      });
      res.status(201).json({ menesaje: "Creado con exito", mascotaId: data });
    } catch (e) {
      next(e);
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
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nombre, tipo, raza, edad } = req.body;
      const mascota = await mascotaManager.getOne(id);
      if (!mascota)
        throw new ApiErrors(ERROR_MESSAGE.MASCOTA_NO_ENCONTRADA, 404);
      const newMascota = {
        nombre: nombre ? nombre.toUpperCase() : mascota.nombre,
        tipo: tipo ? tipo.toUpperCase() : mascota.tipo,
        raza: raza ? raza.toUpperCase() : mascota.raza,
        edad: edad !== undefined ? edad : mascota.edad,
      };

      const mascotaActualizada = await mascotaManager.update(id, newMascota);
      res.status(200).json({ mascotaActualizado: mascotaActualizada });
    } catch (e) {
      next(e);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new ApiErrors(ERROR_MESSAGE.FALTA_ID, 400);
      }
      const mascota = await mascotaManager.deleted(id);
      res.status(201).json({ stauts: "delete-ok", mascotaId: mascota.id });
    } catch (e) {
      next(e);
    }
  }
}

export default new MascotasController();
