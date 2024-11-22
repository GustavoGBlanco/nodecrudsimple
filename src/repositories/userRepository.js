import UserModel from "../entities/User.js";
import mongoose from 'mongoose';

const userRepository = {
    findAll: async () => {
        return await UserModel.find();
    },

    findById: async (id) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        return await UserModel.findById(id);
    },

    findByEmail: async (email) => {
        return await UserModel.findOne({email});
    },

    create: async(data) => {
        return await UserModel.create(data);
    },

    update: async(id, data) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        return await UserModel.findByIdAndUpdate(id, data, {new: true});
    },

    delete: async(id) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid ID format');
        }
        return await UserModel.findOneAndDelete(id);
    }
}

export default userRepository;