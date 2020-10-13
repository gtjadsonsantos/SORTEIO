"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ReportRafflesController_1 = __importDefault(require("../controllers/ReportRafflesController"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeReportRaffles = express_1.Router();
routeReportRaffles.get("/report_raffles", validateUserType_1.default, ReportRafflesController_1.default.indexAll);
exports.default = routeReportRaffles;
