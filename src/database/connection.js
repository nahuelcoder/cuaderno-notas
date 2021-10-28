const mongoose = require("mongoose");

const dbname = "cuadernoWeb";
const password = "ovSjUuBpid3Y1cIF";
const uri = `mongodb+srv://Nahuel:${password}@cluster0.kwq5k.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Exporta la función con la conexión a la db
module.exports = () =>
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
