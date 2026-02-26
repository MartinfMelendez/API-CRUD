class MascotasController {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json({ stauts: "ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async update(req, res) {
    try {
      res.status(201).json({ stauts: "ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async delete(req, res) {
    try {
      res.status(201).json({ stauts: "ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getAll(req, res) {
    try {
      res.status(201).json({ stauts: "ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async getOne(req, res) {
    try {
      res.status(201).json({ stauts: "ok" });
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export default new MascotasController();
