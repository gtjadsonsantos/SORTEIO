import {Router} from "express"
import ReportRafflesController from "../controllers/ReportRafflesController"
import validateUserType from '../middlewares/validateUserType'
const routeReportRaffles = Router()

routeReportRaffles.get("/report_raffles",validateUserType,ReportRafflesController.indexAll)

export default routeReportRaffles