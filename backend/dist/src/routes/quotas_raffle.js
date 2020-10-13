"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Quotas_RaffleControlles_1 = __importDefault(require("../controllers/Quotas_RaffleControlles"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var routeQuotaRaflle = express_1.Router();
routeQuotaRaflle.get("/quotas_raffle/:quota_raffle_id", validateJWT_1.default, Quotas_RaffleControlles_1.default.indexOne);
routeQuotaRaflle.get("/quotas_rafles", validateJWT_1.default, Quotas_RaffleControlles_1.default.indexAll);
routeQuotaRaflle.post("/quota_raffle", validateUserType_1.default, Quotas_RaffleControlles_1.default.create);
routeQuotaRaflle.put("/quota_raffle", validateUserType_1.default, Quotas_RaffleControlles_1.default.update);
routeQuotaRaflle.delete("/quota_raffle", validateUserType_1.default, Quotas_RaffleControlles_1.default.delete);
exports.default = routeQuotaRaflle;
