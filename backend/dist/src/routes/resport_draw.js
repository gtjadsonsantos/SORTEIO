"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ReportDrawController_1 = __importDefault(require("../controllers/ReportDrawController"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeReportDraw = express_1.Router();
routeReportDraw.get("/report_draw", validateUserType_1.default, ReportDrawController_1.default.indexAll);
exports.default = routeReportDraw;
