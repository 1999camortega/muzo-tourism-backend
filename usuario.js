const Usuario = require('./models/Usuario');
const mongoose = require('mongoose');

const nuevoUsuario = new Usuario({
  nombre: "Muzo.Turismo",
  correo: "Muzo.turismo@gmail.com",
  contraseña: "Boyaca12586/",
  rol: "usuario"  
});

nuevoUsuario.save()
  .then(() => console.log("Usuario guardado exitosamente"))
  .catch(err => console.log("Error al guardar el usuario:", err));

