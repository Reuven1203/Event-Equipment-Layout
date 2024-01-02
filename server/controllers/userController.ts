import { Request, Response } from 'express';
import User from './../models/userModel';

const userController = {
    // Create a new user
    async createUser(req : Request, res:Response) {
        try {
            const { firstName, lastName, email, password, industryName } = req.body;
            if (!firstName || !lastName || !email || !password || !industryName) {
                return res.status(400).json({ message: 'All fields are required' });
            }
            //check if user exists
            const checkUser = await User.findOne({ email });
            if (checkUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    // Get all users
    async getAllUsers(req : Request, res:Response) {
        try {
            const users = await User.find({}).select('-Packages')
            res.status(200).json(users);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single user by ID
    async getUser(req : Request, res:Response) {
        try {
            const user = await User.findById(req.params.id).select('-Packages');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a user
    async updateUser(req : Request, res:Response) {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            ).select('-Packages');
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(updatedUser);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a user
    async deleteUser(req : Request, res:Response) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default userController;
