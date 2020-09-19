import { Router } from "express";
import Draw_QuotasControllers from "../controllers/Draw_QuotasControllers";
import valdadeJWT from '../middlewares/validateJWT'
import validateUserType from '../middlewares/validateUserType'
const routeDrawQuotas = Router();

routeDrawQuotas.get("/draw_quotas/:draw_quota_id", Draw_QuotasControllers.indexOne);
routeDrawQuotas.get("/draw_quotas", Draw_QuotasControllers.indexAll);
routeDrawQuotas.post("/draw_quota" , Draw_QuotasControllers.create);
routeDrawQuotas.put("/draw_quota",validateUserType, Draw_QuotasControllers.update);
routeDrawQuotas.delete("/draw_quota",validateUserType, Draw_QuotasControllers.delete);

    
export default routeDrawQuotas;