// Importamos mongoose, la biblioteca ODM (Object Document Mapper) para MongoDB
import mongoose from 'mongoose';

// Definimos un esquema para el modelo de usuario
// Este esquema define la forma en que los documentos de usuarios se almacenarán en la base de datos
const userSchema = new mongoose.Schema({
    // Campo "name": obligatorio, debe ser de tipo String
    name: {type: String, required: true},
    // Campo "email": obligatorio, debe ser único y de tipo String
    // El índice 'unique' ayuda a prevenir duplicados directamente desde MongoDB
    email: {type: String, required: true, unique: true},
    // Campo "password": obligatorio, también de tipo String
    // Se recomienda aplicar hashing (como bcrypt) antes de guardar en la base de datos
    password: {type: String, required: true},
});

// Creamos el modelo 'User' a partir del esquema definido
// Este modelo será usado para interactuar con la colección 'users' en MongoDB
const UserModel = mongoose.model('User', userSchema);

// Exportamos el modelo para poder utilizarlo en otras partes del proyecto (servicios, controladores, etc.)
export default UserModel;