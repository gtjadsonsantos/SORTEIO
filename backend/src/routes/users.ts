import { Router } from "express";
import UserControllers from "../controllers/UserControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeUsers = Router();

routeUsers.get("/user/:user_id",validateUserType, UserControllers.indexOne);
routeUsers.get("/users",validateUserType, UserControllers.indexAll);
routeUsers.post("/user", UserControllers.create);
routeUsers.put("/user",valdadeJWT, UserControllers.update);
routeUsers.delete("/user",validateUserType, UserControllers.delete);


export default routeUsers;