import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';

const router = express.Router();

//GET -> localhost:3001/api/users - localhost:3001/api/users/
router.get('/', getAllUsers);
//GET -> localhost:3001/api/users/1 - localhost:3001/api/users/2 - localhost:3001/api/users/3
router.get('/:id', getUserById);
//POST -> localhost:3001/api/users - localhost:3001/api/users/
router.post('/', createUser);
//PUT -> localhost:3001/api/users/1 - localhost:3001/api/users/2 - localhost:3001/api/users/3
router.put('/:id', updateUser);
//DELETE -> localhost:3001/api/users/1 - localhost:3001/api/users/2 - localhost:3001/api/users/3
router.delete('/:id', deleteUser);

export default router;