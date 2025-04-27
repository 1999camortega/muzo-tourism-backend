const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: Date, required: true },
  lugar: { type: String, required: true },
  imagenUrl: { type: String }
});

module.exports = mongoose.model('Evento', eventoSchema);
