"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Winners_DrawsController_1 = __importDefault(require("../controllers/Winners_DrawsController"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var routeWinnersDraw = express_1.Router();
routeWinnersDraw.get("/winners_draws/:winner_id", Winners_DrawsController_1.default.indexOne);
routeWinnersDraw.get("/winners_draws", Winners_DrawsController_1.default.indexAll);
routeWinnersDraw.get("/join_winners_participants_users_quotas_draw", Winners_DrawsController_1.default.indexAllJoinWinnersParticipantsUsersQuotasDraw);
routeWinnersDraw.post("/winner_draw", validateJWT_1.default, Winners_DrawsController_1.default.create);
routeWinnersDraw.put("/winner_draw", validateUserType_1.default, Winners_DrawsController_1.default.update);
routeWinnersDraw.delete("/winner_draw", validateUserType_1.default, Winners_DrawsController_1.default.delete);
exports.default = routeWinnersDraw;
