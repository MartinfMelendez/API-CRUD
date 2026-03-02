import { model, Schema } from "mongoose";

let collection = "usuarios";

const schema = new Schema(
  {
    nombre: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, select: false },
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);

const Usuario = model(collection, schema);

export default Usuario;
