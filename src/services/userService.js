// Importamos el repositorio que encapsula el acceso a la base de datos
import userRepository from "../repositories/userRepository.js";

// Definimos el servicio de usuarios, encargado de manejar la lógica de negocio
// Esta capa se comunica con el repositorio y aplica validaciones, reglas y condiciones de uso
const userService  = {
    // Obtener todos los usuarios (sin validación extra)
    getAllUsers: async() => {
        return await userRepository.findAll();
    },

    // Obtener un usuario por ID
    getUserById: async(id) => {
        // Se busca el usuario usando el repositorio
        const user = await userRepository.findById(id);
        // Si no existe, lanzamos un error controlado
        if(!user) {
            throw new Error('User not found');
        }

        return user;
    },

    // Crear un nuevo usuario
    createUser: async(data) => {
        // Verificamos si ya existe un usuario con el mismo email
        const existingUser = await userRepository.findByEmail(data.email);
        if(existingUser) {
            throw new Error('Email already in use');
        }
        // Si no existe, procedemos a crear el usuario
        const newUser = await userRepository.create(data);
        return newUser;
    },

    // Actualizar un usuario existente
    updateUser: async(id, data) => {
        // Verificamos si el usuario existe antes de actualizar
        const user = await userRepository.findById(id);
        if(!user) {
            throw new Error('User not found');
        }

        // Se actualiza el usuario y se retorna el nuevo estado
        const updatedUser = await userRepository.update(id, data);
        return updatedUser;
    },

    // Eliminar un usuario por ID
    deleteUser: async(id) => {
        // Verificamos si el usuario existe
        const user = await userRepository.findById(id);
        if(!user) {
            throw new Error('User not found');
        }
        
        // Si existe, procedemos a eliminarlo
        await userRepository.delete(id);
         // Retornamos una respuesta personalizada de éxito
        return {message: 'User deleted successfully'};
    }
}

// Exportamos el servicio para ser usado por los controladores
export default userService;