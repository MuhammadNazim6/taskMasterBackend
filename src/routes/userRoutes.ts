import express from "express";
import { login, signup } from "../controllers/userController";
const userRoute = express();


userRoute.post("/signup", signup)
userRoute.post("/login", login)



export default userRoute