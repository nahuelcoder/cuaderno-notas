const mongoose = require("mongoose");

// Destructuración de Schema y definición como mongoose
const { Schema } = mongoose;

// Crea esquema de MongoDB
const NotaSchema = new Schema({
  title: String,
  body: String,
});

// Crea el modelo para la colección siguiendo el nombre de colección de la db
const Model = mongoose.model("notas", NotaSchema);

module.exports = Model;
