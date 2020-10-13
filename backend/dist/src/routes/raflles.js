"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var RafflesControlles_1 = __importDefault(require("../controllers/RafflesControlles"));
var validateUserType_1 = __importDefault(require("../middlewares/validateUserType"));
var validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
var routeRaflles = express_1.Router();
routeRaflles.get("/raffle/:raffle_id", validateJWT_1.default, RafflesControlles_1.default.indexOne);
routeRaflles.get("/raffles", validateJWT_1.default, RafflesControlles_1.default.indexAll);
routeRaflles.post("/raffle", validateUserType_1.default, RafflesControlles_1.default.create);
routeRaflles.put("/raffle", validateUserType_1.default, RafflesControlles_1.default.update);
routeRaflles.delete("/raffle", validateUserType_1.default, RafflesControlles_1.default.delete);
exports.default = routeRaflles;
