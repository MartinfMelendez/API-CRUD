import mascotaManager from "../service/mascota.manager.js";

class MascotasController {
  constructor() {}

  async create(req, res) {
    try {
      const data = req.body;
      await mascotaManager.create(data);
      res.status(201).json({ objeto: data });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getOne(req, res) {
    try {
      res.status(201).json({ stauts: "getOne-ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getAll(req, res) {
    try {
      const mascotas = await mascotaManager.getAll();
      console.log(mascotas);
      res.status(200).json(mascotas);
    } catch (e) {
      res.status(500).send(e);
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
      res.status(201).json({ stauts: "delete-ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new MascotasController();
