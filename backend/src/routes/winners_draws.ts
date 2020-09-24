import { Router } from "express";
import Winners_DrawsController from "../controllers/Winners_DrawsController";
import validateJWT from '../middlewares/validateJWT'

import validateUserType from '../middlewares/validateUserType'
const routeWinnersDraw = Router();

routeWinnersDraw.get("/winners_draws/:winner_id", Winners_DrawsController.indexOne);
routeWinnersDraw.get("/winners_draws", Winners_DrawsController.indexAll);
routeWinnersDraw.get("/join_winners_participants_users_quotas_draw", Winners_DrawsController.indexAllJoinWinnersParticipantsUsersQuotasDraw);
routeWinnersDraw.post("/winner_draw",validateJWT, Winners_DrawsController.create);
routeWinnersDraw.put("/winner_draw",validateUserType, Winners_DrawsController.update);
routeWinnersDraw.delete("/winner_draw",validateUserType, Winners_DrawsController.delete);

export default routeWinnersDraw;
