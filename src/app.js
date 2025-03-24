// Importamos express, el framework web para Node.js
import express from 'express';
// Importamos dotenv para poder leer variables de entorno desde un archivo .env
import dotenv from 'dotenv';
// Importamos las rutas relacionadas con usuarios
import userRoutes from './routes/userRoutes.js';

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

// Creamos una instancia de la aplicación Express
const app = express();

// Middleware para parsear solicitudes con cuerpo en formato JSON
// Permite acceder a los datos enviados en el body de un request
app.use(express.json());

// Middleware para montar las rutas de usuarios en la ruta base /api/users
// Ejemplo: GET localhost:3001/api/users
app.use('/api/users', userRoutes);

// Middleware de manejo de errores global
// Captura errores no manejados en rutas y responde con código 500
app.use((err, req, res, next) => {
    // Mostramos el stack del error en consola para debugging
    console.error(err.stack);
    // Respondemos al cliente con un mensaje genérico de error
    res.status(500).json({message: 'Internal Server Error'});
});

// Exportamos la instancia de la app para poder usarla en otros archivos (por ejemplo en server.js)
export default app;