"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Winners_RafflesController_1 = __importDefault(require("../controllers/Winners_RafflesController"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeWinnersRaffles = express_1.Router();
routeWinnersRaffles.get("/winners_raffles/:winner_id", Winners_RafflesController_1.default.indexOne);
routeWinnersRaffles.get("/winners_raffles", Winners_RafflesController_1.default.indexAll);
routeWinnersRaffles.get("/join_raffles_participants_users_quotas_raffles", Winners_RafflesController_1.default.indexAllJoinWinnersParticipantsUsersQuotasRaffles);
routeWinnersRaffles.post("/winner_raffle", validateJWT_1.default, Winners_RafflesController_1.default.create);
routeWinnersRaffles.put("/winner_raffle", validateUserType_1.default, Winners_RafflesController_1.default.update);
routeWinnersRaffles.delete("/winner_raffle", validateUserType_1.default, Winners_RafflesController_1.default.delete);
exports.default = routeWinnersRaffles;
