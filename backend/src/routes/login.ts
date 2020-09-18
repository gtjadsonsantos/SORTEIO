import { Router } from "express";
import ControllerLogin from "../controllers/ControllerLogin";

const routeLogin = Router();

routeLogin.post("/login", ControllerLogin.create);



export default routeLogin;