const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  titulo: "Feria de Esmeraldas de Muzo 2025",
  descripcion: "La Feria de Esmeraldas de Muzo es el evento más esperado del año, donde los visitantes pueden disfrutar de exposiciones, danzas tradicionales, música en vivo y la oportunidad de comprar joyas hechas con esmeraldas locales.",
  fecha: "2025-06-20T10:00:00Z",
  lugar: "Plaza principal de Muzo",
  imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCM4X3Y9BINAmtUfXxB07IKX2j-J7NTsWwfQ&s",
});

module.exports = mongoose.model('Evento', eventoSchema);
