// Crea un objeto controller que contiene la lógica a implementar en cada ruta
const controller = {};

// Importa la conexión a la db
const connection = require("../database/connection");

// Importa el modelo
const Model = require("../models/cuadernoWeb.model");

// Establece el funcionamiento de cada ruta  creando un atributo del objeto controller
controller.index = async (req, res) => {
  try {
    await connection();
    const todasLasNotas = await Model.find();
    res.render("index", {
      titulo: "Inicio",
      notas: todasLasNotas,
    });
  } catch (error) {
    console.error(error);
  }
};

controller.new_entry = (req, res) => {
  res.render("new_entry", {
    titulo: "Ingresar nueva nota",
  });
};

controller.new_entry_post = (req, res) => {
  let nueva_entrada = {
    title: req.body.title,
    body: req.body.body,
  };
  new Model(nueva_entrada).save();
  res.redirect('/');
};

module.exports = controller;
