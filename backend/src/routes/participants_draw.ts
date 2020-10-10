import { Router } from "express";
import PartitipantsDrawControllers from "../controllers/ParticipantsDrawControllers";
import validateJWT from '../middlewares/validateJWT'

import validateUserType from '../middlewares/validateUserType'
const routePartitipantsDraw= Router();

routePartitipantsDraw.get("/participants_draw/:participant_id", PartitipantsDrawControllers.indexOne);
routePartitipantsDraw.get("/participants_draws", PartitipantsDrawControllers.indexAll);
routePartitipantsDraw.get("/join_participants_draws_quotas", PartitipantsDrawControllers.indexAllJoinDrawsQuotasParticipants);
routePartitipantsDraw.get("/join_participants_draws_quotas/:user_id", PartitipantsDrawControllers.indexAllJoinDrawsQuotasParticipantsByUser);
routePartitipantsDraw.post("/participant_draw",validateJWT, PartitipantsDrawControllers.create);
routePartitipantsDraw.put("/participant_draw",validateUserType, PartitipantsDrawControllers.update);
routePartitipantsDraw.delete("/participant_draw",validateUserType, PartitipantsDrawControllers.delete);

export default routePartitipantsDraw;

