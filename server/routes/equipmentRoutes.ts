import express from 'express';
import equipmentController from '../controllers/equipmentController';
const router = express.Router();
import {upload, resizeImage} from './../middleware/multer';

router.route('/:uid').get(equipmentController.getAllEquipment)
    .post( upload.single('picture'),resizeImage, equipmentController.createEquipment)


export default router;