import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()

mongoose.set('debug', true);


// mongoose.connect(process.env.MONGODB_PATH, () => {
//     console.log('connected to Database');
// }, (e) => console.log(e))

mongoose.connect(process.env.MONGODB_PATH, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('MongoDB connected successfully');
    // Place your code here that should run after the database is connected
})
.catch(error => {
    console.error('MongoDB connection error:', error);
});

// mongoose 
//  .connect(process.env.MONGODB_PATH, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,   })   
//  .then(() => console.log("Database connected!"))
//  .catch(err => console.log(err));

const PORT = process.env.SERVER_PORT || 9000
const origin = process.env.CORS_ORIGIN || ['http://localhost:3000', 'https://projectrack.netlify.app/']

const app = express()

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded())

app.use(api)

app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}, wait for connection to database`)
})