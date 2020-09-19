import { Router } from "express";
import UserControllers from "../controllers/UserControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeEntitys = Router();

routeEntitys.get("/user/:user_id",validateUserType, UserControllers.indexOne);
routeEntitys.get("/users",validateUserType, UserControllers.indexAll);
routeEntitys.post("/user", UserControllers.create);
routeEntitys.put("/user",valdadeJWT, UserControllers.update);
routeEntitys.delete("/user",valdadeJWT, UserControllers.delete);


export default routeEntitys;