import { Request, Response } from 'express';
import Equipment from './../models/equipmentModel';
import path from 'path';
import fs from 'fs';
import User from '../models/userModel'; // Adjust the path to your Equipment model

const equipmentController = {
    // Create new equipment
    async createEquipment(req: Request, res: Response) {
        try {
            const { uid } = req.params;
            const { name, description, price, isExtra } = req.body;

            if (!uid) {
                return res.status(400).json({ message: 'Missing user id' });
            }
            if (!req.file) {
                return res.status(400).json({ message: 'Missing file' });
            }

            //check if existing equipment has same name
            const checkEquipment = await Equipment.findOne({ name });
            if (checkEquipment) {
                return res.status(400).json({ message: 'Equipment already exists with this name' });
            }

            const newEquipment = new Equipment({
                uid,
                name,
                description,
                price,
                picture: req.file.filename, // Reference to the saved file
                isExtra,
            });

            const savedEquipment = await newEquipment.save();
            res.status(201).json(savedEquipment);
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },


    // Get all equipment
    async getAllEquipment(req: Request, res: Response) {
        try {
            if(!req.params.uid){
                return res.status(400).json({ message: 'Missing user id' });
            }
            //find if user exists
            const checkUser = await User.findById(req.params.uid);
            if (!checkUser) {
                return res.status(400).json({ message: 'User does not exist' });
            }
            const equipments = await Equipment.find().where('uid').equals(req.params.uid);
            res.status(200).json(equipments);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single equipment by ID
    async getEquipmentById(req: Request, res: Response) {
        try {
            const equipment = await Equipment.findById(req.params.id);
            if (!equipment) {
                return res.status(404).json({ message: 'Equipment not found' });
            }
            res.status(200).json(equipment);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update equipment
    async updateEquipment(req: Request, res: Response) {
        try {
            const updatedEquipment = await Equipment.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );
            if (!updatedEquipment) {
                return res.status(404).json({ message: 'Equipment not found' });
            }
            res.status(200).json(updatedEquipment);
        } catch (error:any) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete equipment
    async deleteEquipment(req: Request, res: Response) {
        try {
            const equipment = await Equipment.findByIdAndDelete(req.params.id);
            if (!equipment) {
                return res.status(404).json({ message: 'Equipment not found' });
            }
            res.status(200).json({ message: 'Equipment deleted successfully' });
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default equipmentController;
