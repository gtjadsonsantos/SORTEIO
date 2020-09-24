import { Router } from "express";
import DrawControllers from "../controllers/DrawControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeDraws = Router();

routeDraws.get("/draw/:draw_id", DrawControllers.indexOne);
routeDraws.get("/draws", DrawControllers.indexAll);
routeDraws.get("/joindrawsimages", DrawControllers.indexAllJoinDrawsImages);
routeDraws.post("/draw",validateUserType, DrawControllers.create);
routeDraws.put("/draw",validateUserType, DrawControllers.update);
routeDraws.delete("/draw",validateUserType, DrawControllers.delete);

    
export default routeDraws;