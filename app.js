const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express(); 

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de Turismo en Muzo, Boyacá 🚀');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conexión exitosa a MongoDB'))
  .catch((error) => console.error('❌ Error de conexión:', error));
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});



