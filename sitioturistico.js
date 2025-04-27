const SitioTuristico = require('./models/SitioTuristico');
const mongoose = require('mongoose');

const nuevoSitio = new SitioTuristico({
  nombre: "Mina de Esmeraldas de Muzo",
  descripcion: "La Mina de Esmeraldas de Muzo es uno de los mayores atractivos turísticos en la región, famosa por sus esmeraldas de calidad mundial. Los turistas pueden visitar las minas y aprender sobre el proceso de extracción.",
  ubicacion: "Muzo, Boyacá, Colombia",
  imagenUrl: "https://radionacional-v3.s3.amazonaws.com/s3fs-public/inline-images/Guaqueros%20Muzo.jpg"
});

nuevoSitio.save()
  .then(() => console.log("Sitio turístico guardado exitosamente"))
  .catch(err => console.log("Error al guardar el sitio turístico:", err));

