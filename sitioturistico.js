const mongoose = require('mongoose');

const sitioTuristicoSchema = new mongoose.Schema({
  nombre: "Mina de Esmeraldas de Muzo",
  descripcion: "La Mina de Esmeraldas de Muzo es uno de los mayores atractivos turísticos en la región, famosa por sus esmeraldas de calidad mundial. Los turistas pueden visitar las minas y aprender sobre el proceso de extracción",
  ubicacion: "Muzo, Boyacá, Colombia",
  imagenUrl: "https://radionacional-v3.s3.amazonaws.com/s3fs-public/inline-images/Guaqueros%20Muzo.jpg",
  fechaRegistro: "2025-04-25T00:00:00Z"
});

module.exports = mongoose.model('SitioTuristico', sitioTuristicoSchema);
