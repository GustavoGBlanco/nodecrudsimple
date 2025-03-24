// Importamos mongoose para conectar con MongoDB
import mongoose from 'mongoose';
// Importamos dotenv para cargar variables de entorno desde un archivo .env
import dotenv from 'dotenv';

// Inicializamos dotenv para poder acceder a process.env
dotenv.config();

// Función asincrónica para conectar a la base de datos
const connectDB = async () => {
    try{
        // Intentamos conectar a MongoDB usando la URL definida en variables de entorno
        // Las opciones 'useNewUrlParser' y 'useUnifiedTopology' mejoran la compatibilidad y la estabilidad
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        // Si la conexión es exitosa, se imprime un mensaje informativo
        console.log('Database connected successfully');
    }
    catch(error) {
        // Si ocurre un error, se imprime en consola y se finaliza el proceso con código 1 (error)
        console.error('Database connection error:, error');
        // Finaliza la aplicación (útil en entornos productivos)
        process.exit(1);
    }
}

// Exportamos la función para que pueda ser usada en otros módulos del proyecto
export default connectDB;