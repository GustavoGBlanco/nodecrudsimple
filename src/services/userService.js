import userRepository from "../repositories/userRepository.js";

const userService  = {
    getAllUsers: async() => {
        return await userRepository.findAll();
    },

    getUserById: async(id) => {
        const user = userRepository.findById(id);
        if(!user) {
            throw new Error('User not found');
        }

        return user;
    },

    createUser: async(data) => {
        const existingUser = await userRepository.findByEmail(data.email);
        if(existingUser) {
            throw new Error('Email already in use');
        }
        const newUser = await userRepository.create(data);
        return newUser;
    },

    updateUser: async(id, data) => {
        const user = userRepository.findById(id);
        if(!user) {
            throw new Error('User not found');
        }

        const updatedUser = await userRepository.update(id, data);
        return updatedUser;
    },

    deleteUser: async(id) => {
        const user = userRepository.findById(id);
        if(!user) {
            throw new Error('User not found');
        }
        
        await userRepository.delete(id);
        return {message: 'User deleted successfully'};
    }
}

export default userService;