import multer from 'multer';
import sharp from 'sharp';
import fs from 'fs';
import { Logger } from './logger';
import path from 'path';
import {NextFunction, Response, Request} from 'express';


const getFileExtension = (filename: string) => {
    return filename.split('.').pop();
}

const fileStorage = multer.memoryStorage()

const multerFilter = (req: any, file: any, cb: any) => {
    if (file.mimetype.startsWith('image')) {
        //only accept png files
        if (getFileExtension(file.originalname) !== 'png') {
            return cb(new Error('Not a png file! Please upload only png images.'), false);
        }
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload only images.'), false);
    }
}

export const resizeImage = async (req : Request, res:Response, next: NextFunction) => {
    if (!req.file) {
        return next();
    }
    if(!req.params.uid) {
        return res.status(400).json({message: 'Missing user id'});
    }
    const filename = `${req.body.name.trim()}-ts-${Date.now()}.png`;
    const directory = path.join(__dirname, `./../public/equipmentUploads/User-${req.params.uid}`); // Adjusted path
    const filePath = path.join(directory, filename)

    try {
        // Create the directory if it doesn't exist
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        // Process and save the file
        await sharp(req.file.buffer)
            .toFormat('png')
            .png({ quality: 90 })
            .toFile(filePath);

        req.file.filename = filename; // Update req.file with new file info
        next();
    } catch (error) {
        Logger.error(error);
        next(error);
    }
};




export const upload = multer({
    storage: fileStorage,
    fileFilter: multerFilter
});








