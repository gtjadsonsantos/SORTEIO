"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ParticipantsDrawControllers_1 = __importDefault(require("../controllers/ParticipantsDrawControllers"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routePartitipantsDraw = express_1.Router();
routePartitipantsDraw.get("/participants_draw/:participant_id", ParticipantsDrawControllers_1.default.indexOne);
routePartitipantsDraw.get("/participants_draws", ParticipantsDrawControllers_1.default.indexAll);
routePartitipantsDraw.get("/join_participants_draws_quotas", ParticipantsDrawControllers_1.default.indexAllJoinDrawsQuotasParticipants);
routePartitipantsDraw.get("/join_participants_draws_quotas/:user_id", ParticipantsDrawControllers_1.default.indexAllJoinDrawsQuotasParticipantsByUser);
routePartitipantsDraw.post("/participant_draw", validateJWT_1.default, ParticipantsDrawControllers_1.default.create);
routePartitipantsDraw.put("/participant_draw", validateUserType_1.default, ParticipantsDrawControllers_1.default.update);
routePartitipantsDraw.delete("/participant_draw", validateUserType_1.default, ParticipantsDrawControllers_1.default.delete);
exports.default = routePartitipantsDraw;
