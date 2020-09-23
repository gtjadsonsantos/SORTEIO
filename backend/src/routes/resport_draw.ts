import {Router} from "express"
import ReportDrawController from "../controllers/ReportDrawController"
import validateUserType from '../middlewares/validateUserType'
const routeReportDraw = Router()

routeReportDraw.get("/report_draw",validateUserType,ReportDrawController.indexAll)

export default routeReportDraw