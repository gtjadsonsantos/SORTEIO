import { Router } from "express";
import ImageControllers from "../controllers/ImageControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeImage = Router();

routeImage.get("/image/:image_id", ImageControllers.indexOne);
routeImage.get("/images", ImageControllers.indexAll);
routeImage.post("/image",validateUserType, ImageControllers.create);
routeImage.put("/image",validateUserType, ImageControllers.update);
routeImage.delete("/image", ImageControllers.delete);

export default routeImage;

