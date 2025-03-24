// Importamos express para poder crear rutas con su router
import express from 'express';
// Importamos los controladores que contienen la lógica para cada operación sobre usuarios
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

// Inicializamos el router de Express
const router = express.Router();

/**
 * Definimos las rutas para el recurso /users
 * Estas rutas manejan operaciones CRUD sobre los usuarios
 */

// GET /api/users
// Obtiene todos los usuarios
router.get('/', getAllUsers);

// GET /api/users/:id
// Obtiene un usuario específico según su ID
router.get('/:id', getUserById);

// POST /api/users
// Crea un nuevo usuario con los datos enviados en el body
router.post('/', createUser);

// PUT /api/users/:id
// Actualiza un usuario existente según su ID
router.put('/:id', updateUser);

// DELETE /api/users/:id
// Elimina un usuario por su ID
router.delete('/:id', deleteUser);

// Exportamos el router para poder usarlo en el archivo principal de rutas o en app.js
export default router;