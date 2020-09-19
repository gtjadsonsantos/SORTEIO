import { Router } from "express";
import BusinessControllers from "../controllers/BusinessControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeBusiness = Router();

routeBusiness.get("/business/:businnes_id", BusinessControllers.indexOne);
routeBusiness.get("/business", BusinessControllers.indexAll);
routeBusiness.post("/business",validateUserType, BusinessControllers.create);
routeBusiness.put("/business",validateUserType, BusinessControllers.update);
routeBusiness.delete("/business",validateUserType, BusinessControllers.delete);

    
export default routeBusiness;