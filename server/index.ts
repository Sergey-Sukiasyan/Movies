import { app } from './config/app';
import dotenv from 'dotenv';
dotenv.config();

//Cors
import './config/cors';

// Routes
import './routes/index';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port !!!`);
})