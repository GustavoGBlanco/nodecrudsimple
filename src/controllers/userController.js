import userService from "../services/userService.js";

export const getAllUsers = async(req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } 
    catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const getUserById = async(req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    } 
    catch(error) {
        res.status(404).json({message: error.message});
    }
};

export const createUser = async(req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } 
    catch(error) {
        res.status(400).json({message: error.message});
    }
};

export const updateUser = async(req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } 
    catch(error) {
        res.status(404).json({message: error.message});
    }
};

export const deleteUser = async(req, res) => {
    try {
        const result = await userService.deleteUser(req.params.id);
        res.status(200).json(result);
    } 
    catch(error) {
        res.status(404).json({message: error.message});
    }
};