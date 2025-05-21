import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from './routes/user.route.js'

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.preca8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected to MongoDB database");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000!!!");
});

//api's

app.use('/api/user', userRouter)
