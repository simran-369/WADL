import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
console.log(process.env.JWT_SECRET);

app.use('/api/users', userRoutes);
console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
console.log(`Port: ${process.env.PORT}`);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
  })
    .catch(err => console.log(err));
//PORT=3010
//MONGODB_URI=mongodb+srv://maniac_psycho13:123Aryan.@cluster0.wflrtqr.mongodb.net/pariii
// .env file bnana
//Content-Type: application/json
//http://localhost:3010/api/users/register
