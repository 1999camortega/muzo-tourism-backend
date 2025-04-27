const mongoose = require('mongoose');

const sitioTuristicoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  ubicacion: { type: String, required: true },
  imagenUrl: { type: String },
  fechaRegistro: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SitioTuristico', sitioTuristicoSchema);
