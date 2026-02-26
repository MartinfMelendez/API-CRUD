class MascotasController {
  constructor() {}

  async create(req, res) {
    try {
      res.status(201).json({ stauts: "create-ok" });
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
      res.status(201).json({ stauts: "getAll-ok" });
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
