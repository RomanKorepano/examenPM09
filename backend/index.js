import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";

import { secret } from "./config.js";

const DB_URL = "mongodb://localhost:27017/";
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

const generateAccessToken = (id, login) => {
    const payload = {
      id, 
      login 
    }
    return jwt.sign(payload, secret, {expiresIn: "24"});
}

app.get("/getuser", async (req, res) => {

});


async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`server ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
