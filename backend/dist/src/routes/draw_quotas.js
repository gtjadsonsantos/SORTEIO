"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Draw_QuotasControllers_1 = __importDefault(require("../controllers/Draw_QuotasControllers"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeDrawQuotas = express_1.Router();
routeDrawQuotas.get("/draw_quotas/:draw_quota_id", Draw_QuotasControllers_1.default.indexOne);
routeDrawQuotas.get("/draw_quotas", Draw_QuotasControllers_1.default.indexAll);
routeDrawQuotas.post("/draw_quota", Draw_QuotasControllers_1.default.create);
routeDrawQuotas.put("/draw_quota", validateUserType_1.default, Draw_QuotasControllers_1.default.update);
routeDrawQuotas.delete("/draw_quota", validateUserType_1.default, Draw_QuotasControllers_1.default.delete);
exports.default = routeDrawQuotas;
