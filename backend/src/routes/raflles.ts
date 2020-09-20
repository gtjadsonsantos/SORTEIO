import { Router } from "express";
import RafflesControlles from "../controllers/RafflesControlles";
import validateUserType from '../middlewares/validateUserType'
import validateJWT from '../middlewares/validateJWT'
const routeRaflles = Router();

routeRaflles.get("/raffle/:raffle_id",validateJWT, RafflesControlles.indexOne);
routeRaflles.get("/raffles",validateJWT, RafflesControlles.indexAll);
routeRaflles.post("/raffle",validateUserType, RafflesControlles.create);
routeRaflles.put("/raffle",validateUserType, RafflesControlles.update);
routeRaflles.delete("/raffle",validateUserType, RafflesControlles.delete);


export default routeRaflles;