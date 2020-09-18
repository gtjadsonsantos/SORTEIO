import { Router } from "express";
import UserControllers from "../controllers/UserControllers";

const routeEntitys = Router();

routeEntitys.get("/user/:user_id", UserControllers.indexOne);
routeEntitys.get("/users", UserControllers.indexAll);
routeEntitys.post("/user", UserControllers.create);
routeEntitys.put("/user", UserControllers.update);
routeEntitys.delete("/user", UserControllers.delete);


export default routeEntitys;