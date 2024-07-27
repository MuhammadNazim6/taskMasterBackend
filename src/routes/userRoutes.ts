import express from "express";
import { login, signup } from "../controllers/userController";
import { addTask, deleteTask, editTask, getTasks, switchStatus } from "../controllers/taskController";
const userRoute = express();


userRoute.post("/signup", signup)
userRoute.post("/login", login)
userRoute.get("/get-tasks", getTasks)
userRoute.post("/add-task", addTask)
userRoute.patch("/edit-task", editTask)
userRoute.delete("/delete-task", deleteTask)
userRoute.patch("/switch-status", switchStatus)



export default userRoute