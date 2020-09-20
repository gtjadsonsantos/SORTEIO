import { Router } from "express";
import Quotas_RaffleControlles from "../controllers/Quotas_RaffleControlles";
import validateUserType from '../middlewares/validateUserType'
import validateJWT from '../middlewares/validateJWT'
const routeQuotaRaflle = Router();

routeQuotaRaflle.get("/quotas_raffle/:quota_raffle_id",validateJWT, Quotas_RaffleControlles.indexOne);
routeQuotaRaflle.get("/quotas_rafles",validateJWT, Quotas_RaffleControlles.indexAll);
routeQuotaRaflle.post("/quota_raffle",validateUserType, Quotas_RaffleControlles.create);
routeQuotaRaflle.put("/quota_raffle",validateUserType, Quotas_RaffleControlles.update);
routeQuotaRaflle.delete("/quota_raffle",validateUserType, Quotas_RaffleControlles.delete);


export default routeQuotaRaflle;