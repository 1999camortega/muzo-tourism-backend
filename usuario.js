const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: "Muzo.Turismo",
  correo: "Muzo.turismo@gmail.com",
  contraseña: "Boyaca12586/",
  rol: "usuario", enum: ['admin', 'usuario'], default: 'usuario' }
);

module.exports = mongoose.model('Usuario', usuarioSchema);
