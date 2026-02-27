import { Schema, model } from "mongoose";

let collection = "mascotas";

const schema = new Schema({
  nombre: { type: String, require: true },
  tipo: { type: String, require: true },
  raza: { type: String, require: true },
  edad: { type: Number },
});

const Mascota = model(collection, schema);

export default Mascota;
