import { Router } from "express";
import ForgoutPasswordControllers from '../controllers/ForgoutPasswordControllers'
const routeFourgoutPassword = Router();

routeFourgoutPassword.post("/forgout_password",ForgoutPasswordControllers.indexOne)



export default routeFourgoutPassword;