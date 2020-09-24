import { Router } from "express";
import Winners_RafflesController from "../controllers/Winners_RafflesController";
import validateJWT from '../middlewares/validateJWT'

import validateUserType from '../middlewares/validateUserType'
const routeWinnersRaffles = Router();

routeWinnersRaffles.get("/winners_raffles/:winner_id", Winners_RafflesController.indexOne);
routeWinnersRaffles.get("/winners_raffles", Winners_RafflesController.indexAll);
routeWinnersRaffles.get("/join_raffles_participants_users_quotas_raffles", Winners_RafflesController.indexAllJoinWinnersParticipantsUsersQuotasRaffles);
routeWinnersRaffles.post("/winner_raffle",validateJWT, Winners_RafflesController.create);
routeWinnersRaffles.put("/winner_raffle",validateUserType, Winners_RafflesController.update);
routeWinnersRaffles.delete("/winner_raffle",validateUserType, Winners_RafflesController.delete);

export default routeWinnersRaffles;