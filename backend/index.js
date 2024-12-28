import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";

import Posts from "./models/Posts.js";
import Users from "./models/Users.js";

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
  try {
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ошибка получения пользователя", error: error.message });
  }
});

app.get("/getposts", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ошибка получения продуктов", error: error.message });
  }
});

app.post("/registration", async (req, res) => {
  const { login, password } = req.body;
  if (!password || password.trim() === "") {
    return res.status(400).json({ message: "Введите пароль" });
  }

  try {
    const existingUser = await Users.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ message: "Логин занят, выберите другой." });
    }
    const newUser = new Users({ login, password });
    await newUser.save();
    return res.status(201).json({ message: "Регистрация прошла успешно!" });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "Не используйте повторно эти данные!" });
    }

    console.error("Неизвестная ошибка:", err);
    return res.status(500).json({ message: "Неизвестная ошибка." });
  }
});

app.post("/login", async (req, res) => {
  try {
  const { login, password } = req.body;
  const existingUser = await Users.findOne({ login });
    if (!existingUser) {
    return res.status(400).json({ message: "Такой пользователь незарегистрирован" });
  }
    if (existingUser.password !== password) {
    return res.status(400).json({ message: "Неверный логин или пароль!" });
  }
  const token = generateAccessToken(existingUser._id, existingUser.login);
  console.log(token);
  return res.json({token})
  } catch (err) {
    res
      .json({
        message: "Неизвестная ошибка.",
      })
      .status(500);
  }
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
