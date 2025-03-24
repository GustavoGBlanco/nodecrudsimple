// Importamos el servicio de usuarios que contiene la lógica de negocio
import userService from "../services/userService.js";

// Controlador para obtener todos los usuarios
export const getAllUsers = async(req, res) => {
    try {
        // Llamamos al servicio para obtener todos los usuarios
        const users = await userService.getAllUsers();
        // Respondemos con un 200 OK y la lista de usuarios en formato JSON
        res.status(200).json(users);
    } 
    catch(error) {
        // Si ocurre un error inesperado, respondemos con 500 Internal Server Error
        res.status(500).json({message: error.message});
    }
};

// Controlador para obtener un usuario por su ID
export const getUserById = async(req, res) => {
    try {
        // Extraemos el ID de los parámetros de la URL y buscamos al usuario
        const user = await userService.getUserById(req.params.id);
        // Respondemos con el usuario encontrado
        res.status(200).json(user);
    } 
    catch(error) {
        // Si no se encuentra el usuario o hay un error, devolvemos 404 Not Found
        res.status(404).json({message: error.message});
    }
};

// Controlador para crear un nuevo usuario
export const createUser = async(req, res) => {
    try {
        // Creamos un nuevo usuario a partir de los datos enviados en el body
        const newUser = await userService.createUser(req.body);
        // Respondemos con 201 Created y el nuevo usuario creado
        res.status(201).json(newUser);
    } 
    catch(error) {
        // Si hay error de validación o datos mal formateados, devolvemos 400 Bad Request
        res.status(400).json({message: error.message});
    }
};

// Controlador para actualizar un usuario existente
export const updateUser = async(req, res) => {
    try {
        // Actualizamos al usuario según su ID y los datos enviados en el body
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        // Respondemos con 200 OK y el usuario actualizado
        res.status(200).json(updatedUser);
    } 
    catch(error) {
        // Si no se encuentra el usuario, devolvemos 404 Not Found
        res.status(404).json({message: error.message});
    }
};

// Controlador para eliminar un usuario
export const deleteUser = async(req, res) => {
    try {
        // Eliminamos el usuario según el ID recibido por parámetro
        const result = await userService.deleteUser(req.params.id);
        // Respondemos con 200 OK y el resultado (puede incluir un mensaje de éxito)
        res.status(200).json(result);
    } 
    catch(error) {
        // Si no se encuentra el usuario a eliminar, respondemos con 404 Not Found
        res.status(404).json({message: error.message});
    }
};