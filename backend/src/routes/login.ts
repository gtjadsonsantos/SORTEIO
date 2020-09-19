import { Router } from "express";
import LoginController from "../controllers/LoginControllers";

const routeLogin = Router();

routeLogin.post("/login",LoginController.create)



export default routeLogin;