"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ParticipantsRafflesControllers_1 = __importDefault(require("../controllers/ParticipantsRafflesControllers"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routePartitipantsRaffle = express_1.Router();
routePartitipantsRaffle.get("/participants_raffle/:participant_id", ParticipantsRafflesControllers_1.default.indexOne);
routePartitipantsRaffle.get("/participants_raffles", ParticipantsRafflesControllers_1.default.indexAll);
routePartitipantsRaffle.get("/join_participants_raffles_quotas", ParticipantsRafflesControllers_1.default.indexAllJoinRafflesQuotasParticipants);
routePartitipantsRaffle.get("/join_participants_raffles_quotas/:user_id", ParticipantsRafflesControllers_1.default.indexAllJoinRafflesQuotasParticipantsByUser);
routePartitipantsRaffle.post("/participant_raffle", validateJWT_1.default, ParticipantsRafflesControllers_1.default.create);
routePartitipantsRaffle.put("/participant_raffle", validateUserType_1.default, ParticipantsRafflesControllers_1.default.update);
routePartitipantsRaffle.delete("/participant_raffle", validateUserType_1.default, ParticipantsRafflesControllers_1.default.delete);
exports.default = routePartitipantsRaffle;
