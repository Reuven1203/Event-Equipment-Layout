import express from 'express';
import {Logger} from './middleware/logger';
import User from './models/userModel';
import userRoutes from './routes/userRoutes';
import equipmentRoutes from './routes/equipmentRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/equipment', equipmentRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
})


export default app;