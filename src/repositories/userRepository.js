// Importamos el modelo de usuario definido con Mongoose
import UserModel from "../entities/User.js";
// Importamos mongoose para acceder a utilidades como validación de ObjectId
import mongoose from 'mongoose';

// Definimos un repositorio para encapsular las operaciones de acceso a datos (Data Access Layer)
// Este patrón desacopla la lógica de negocio del acceso a la base de datos
const userRepository = {
    // Método para obtener todos los usuarios
    findAll: async () => {
        // Devuelve un array con todos los documentos de la colección 'users'
        return await UserModel.find();
    },

    // Método para buscar un usuario por su ID
    findById: async (id) => {
        // Validamos que el ID sea un ObjectId válido de MongoDB
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        // Devuelve el usuario correspondiente al ID, o null si no existe
        return await UserModel.findById(id);
    },

    // Método para buscar un usuario por su email
    findByEmail: async (email) => {
        // Busca un usuario cuyo campo 'email' coincida
        return await UserModel.findOne({email});
    },

    // Método para crear un nuevo usuario
    create: async(data) => {
        // Inserta un nuevo documento en la colección 'users' con los datos provistos
        return await UserModel.create(data);
    },

    // Método para actualizar un usuario existente por su ID
    update: async(id, data) => {
        // Validamos que el ID sea válido antes de actualizar
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        // Actualiza el documento y devuelve el nuevo documento actualizado (`{ new: true }`)
        return await UserModel.findByIdAndUpdate(id, data, {new: true});
    },

    // Método para eliminar un usuario por su ID
    delete: async(id) => {
        // Validamos que el ID sea válido antes de eliminar
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        // Elimina y devuelve el documento eliminado
        return await UserModel.findOneAndDelete(id);
    }
}

// Exportamos el repositorio para que pueda ser utilizado en los servicios
export default userRepository;