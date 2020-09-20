import { Router } from "express";
import ParticipantsRafflesControllers from "../controllers/ParticipantsRafflesControllers";
import validateJWT from '../middlewares/validateJWT'

import validateUserType from '../middlewares/validateUserType'
const routePartitipantsRaffle= Router();

routePartitipantsRaffle.get("/participants_raffle/:participant_id", ParticipantsRafflesControllers.indexOne);
routePartitipantsRaffle.get("/participants_raffles", ParticipantsRafflesControllers.indexAll);
routePartitipantsRaffle.post("/participant_raffle",validateJWT, ParticipantsRafflesControllers.create);
routePartitipantsRaffle.put("/participant_raffle",validateUserType, ParticipantsRafflesControllers.update);
routePartitipantsRaffle.delete("/participant_raffle",validateUserType, ParticipantsRafflesControllers.delete);

export default routePartitipantsRaffle;