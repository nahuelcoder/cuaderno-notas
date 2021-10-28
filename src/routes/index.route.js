const express = require("express");

// Utiliza la función router de express
const router = express.Router();

// Importa los controladores
const controller = require("../controllers/index.controller");

// Conecta la ruta con el controlador
router.get("/", controller.index);
router.get("/new_entry", controller.new_entry);
router.post("/new_entry", controller.new_entry_post);

module.exports = router;
