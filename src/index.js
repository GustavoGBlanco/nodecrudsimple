// Importamos la instancia de la aplicación Express configurada previamente
import app from './app.js';
// Importamos la función para conectar a la base de datos MongoDB
import connectDB from './config/database.js';

// Definimos el puerto donde correrá el servidor
// Se toma desde la variable de entorno PORT, o se usa 3002 como valor por defecto
const PORT = process.env.PORT || 3002;

// Establecemos conexión con la base de datos antes de iniciar el servidor
connectDB();

// Iniciamos el servidor y escuchamos en el puerto definido
app.listen(PORT, ()=> {
    // Mensaje en consola para confirmar que el servidor está en ejecución
    console.log(`Sevidor corriendo en http://localhost:${PORT}`)
})