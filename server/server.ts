import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import app from './index';
import { Logger } from './middleware/logger';
import User from './models/userModel';

dotenv.config({ path: './../.env' });
const DB = process.env.DB as string;
// Connect to database
const connectionOptions = {
    dbName: process.env.NODE_ENV,
};
mongoose.set('strictQuery', false);
mongoose.connect(DB, connectionOptions).then(() => {
    Logger.info('Server-DB Connection Successful!');
});

// Start server
const server = http.createServer(app);
const port = process.env.DEV_SERVER_PORT || 4000;


server.listen(port, () => {
    Logger.info(`App listening on port ${port}`);
});


export default server;